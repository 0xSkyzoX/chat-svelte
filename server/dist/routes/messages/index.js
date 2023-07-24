"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const send_1 = __importDefault(require("./send"));
const get_1 = __importDefault(require("./get"));
const messages = express_1.default.Router();
messages.use("/messages", get_1.default);
messages.use("/messages", send_1.default);
exports.default = messages;
