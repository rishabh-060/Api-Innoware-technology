import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
        match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"], // E.164 format
    },
    role: {
        type: String,
        enum: ['S-ADMIN', 'ADMIN', 'CLIENT'],
        default: 'CLIENT'
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
            company: this.company,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);