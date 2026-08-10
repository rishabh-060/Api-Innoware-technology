import mongoose from "mongoose";


const contactUsSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true })

export const ContactUs = mongoose.model('ContactUs', contactUsSchema);