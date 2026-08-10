import { Router } from "express";
import { contactUsMessagesController } from "../controllers/guestController.js";

const publicRouter = Router();

publicRouter.post('/contact-us', contactUsMessagesController)


export { publicRouter }