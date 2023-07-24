"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
class Message {
    constructor() {
    }
    send(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reponse = yield fetch(`${Constants_1.Constants.API_BASE}/messages/send`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ message: message })
                });
                if (!reponse.ok) {
                    return console.log("Error Code", reponse.status);
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${Constants_1.Constants.API_BASE}/messages/get`, {
                    method: "GET",
                    headers: {
                        "Constent-Type": "application/json"
                    }
                });
                const data = yield response.json();
                if (response.ok) {
                    return data;
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.default = Message;
