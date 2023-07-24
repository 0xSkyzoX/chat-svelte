"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = __importDefault(require("./Message/message"));
const Events_1 = __importDefault(require("./Events"));
class Client {
    constructor() {
        this.message = new message_1.default();
        this.event = new Events_1.default();
    }
}
exports.default = Client;
