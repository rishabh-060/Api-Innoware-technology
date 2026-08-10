import { User } from "../models/user.model.js"
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiErrror.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import sendMail from "../helpers/tryMailer.js";
import welcomeMail from "../../templates/welcomeMail.template.js";


export const registerUserController = asyncHandler( async (req, res) => {
    const { fullname, email, company, phone, password } = req.body;

    if(
        [fullname, email, company, phone, password].some((field) => (field?.trim === ""))
    ){
        throw new ApiError(400, "All fields are required")
    }

    // checking is user exist with the requested mail
    const existedUser = await User.findOne({email});

    if(existedUser) {
        throw new ApiError(400, "Email already registered")
    }

    const createdUser = await User.create({
        fullname,
        email,
        company,
        phone,
        password
    });

    const isUserCreated = await User.findById(createdUser?._id).select('-password -refreshToken')

    if(!isUserCreated) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong!")
        );
    }

    sendMail(email, "Registration Successfull", '', welcomeMail(fullname, isUserCreated?._id, company))
    return res.status(201).json(
        new ApiResponse(200, isUserCreated, "User registered successfully")
    );
});

export const loginUserController = asyncHandler( async (req, res) => {
    const { email, password } = req.body;

    if(
        [email, password].some((field) => (field?.trim === ""))
    ){
        throw new ApiError(400, "All fields are required")
    }

    // checking is user exist with the requested mail
    const existedUser = await User.findOne({email});

    if(!existedUser) {
        throw new ApiError(400, "Email not registered");
    }

    const isPasswordValid = await existedUser.isPasswordCorrect(password);

    if(!isPasswordValid) {
        throw new ApiError(400, "Password not match");
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(existedUser._id);
    
    const options = {
        httpOnly: true,
        secure: true,
        sameSite : "None"
    }

    return res.status(200).cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: existedUser
                },
                "Logged In Successfull"
            )
        )
});

export const logoutUserController = asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
        sameSite : "None"
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "Logout successfully")
    );
});


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return {accessToken, refreshToken};
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access tokens")
    }
}