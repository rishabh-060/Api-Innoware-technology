import adminNewMessageNotification from "../../templates/adminNewMessageNotification.js";
import userMessageAcknowledgement from "../../templates/userMessageAcknowledgement.js";
import sendMail from "../helpers/tryMailer.js";
import { ContactUs } from "../models/contactus.model.js";
import { ApiError } from "../utils/ApiErrror.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const contactUsMessagesController = asyncHandler(async (req, res) => {
    const {fullname, email, subject, message} = req.body;

    if([fullname, email, subject, message].some((field) => (field?.trim === ""))) {
        throw new ApiError(400, "All fields are required")
    }

    const newMessage = await ContactUs.create({
        fullname,
        email,
        subject,
        message
    })

    if(!newMessage?._id) {
        throw new ApiError(500, "Something went wrong while saving the message! Try Again.")
    }

    sendMail(email, "Message received successfully", '', userMessageAcknowledgement(fullname, subject));
    sendMail(process.env.NODEMAILER_App_id, "New message alert", '', adminNewMessageNotification(fullname, email, subject, message));

    return res.status(201).json(
        new ApiResponse(200, newMessage, "Message received successfully")
    );
})