"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WebSocket_1 = __importDefault(require("../../src/WebSocket"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
const MONGO = process.env.MONGO_URI;
function generateStrongId(length = 12) {
    const digits = '0123456789';
    let strongId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        strongId += digits.charAt(randomIndex);
    }
    return strongId;
}
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: MONGO
        },
    },
});
const send = express_1.default.Router();
send.post("/send", async (req, res) => {
    const data = req.body.message;
    const message = await prisma.message.create({
        data: {
            ...data,
            id: generateStrongId(16)
        }
    });
    WebSocket_1.default.clients.forEach((client) => {
        client.send(JSON.stringify(message));
    });
    return res.json({ message: message });
});
exports.default = send;
