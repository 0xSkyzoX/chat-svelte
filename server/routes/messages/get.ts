import express from "express";
const get = express.Router();
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';
dotenv.config()
const MONGO = process.env.MONGO_URI

const prisma = new PrismaClient({
     datasources: {
          db: {
               url: MONGO

          },
     },
})

get.get('/get', async (req, res) => {
     const messages = await prisma.message.findMany()
     res.json(messages)
})

export default get