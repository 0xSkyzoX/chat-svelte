import express, { Request, Response } from "express";
import { Message } from "../../modules/datatypes";
import wss from "../../src/WebSocket";
import { PrismaClient } from '@prisma/client'
import dotenv from "dotenv"
dotenv.config
const MONGO = process.env.MONGO_URI

function generateStrongId(length: number = 12): string {
     const digits: string = '0123456789';
     let strongId: string = '';

     for (let i = 0; i < length; i++) {
          const randomIndex: number = Math.floor(Math.random() * digits.length);
          strongId += digits.charAt(randomIndex);
     }

     return strongId;
}


const prisma = new PrismaClient({
     datasources: {
          db: {
               url: MONGO
          },
     },
})

const send = express.Router();

send.post("/send", async (req: Request, res: Response) => {
     const data: Message = req.body.message;
     const message = await prisma.message.create({
          data: {
               ...data,
               id: generateStrongId(16)
          }
     })
     wss.clients.forEach((client) => {
          client.send(JSON.stringify(message))
     })

     return res.json({ message: message })
})

export default send