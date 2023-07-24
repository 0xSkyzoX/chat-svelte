"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get = express_1.default.Router();
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO = process.env.MONGO_URI;
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: MONGO
        },
    },
});
get.get('/get', async (req, res) => {
    const messages = await prisma.message.findMany();
    res.json(messages);
});
exports.default = get;
