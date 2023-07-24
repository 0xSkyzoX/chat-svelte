import express from "express";
import send from "./send";
import get from './get';
const messages = express.Router()

messages.use("/messages", get)

messages.use("/messages", send)

export default messages