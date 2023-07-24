import express from "express";
import messages from "./messages";
const api = express.Router();

api.use("/api", messages)

export default api