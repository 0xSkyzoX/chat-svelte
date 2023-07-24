import express from 'express';
import api from '../routes/api';
import bodyParser from "body-parser"
import cors from "cors";

const app = express()

// Middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({origin: "*"}))

app.use("/", api)

app.listen(4444, () => {
     console.log("App Listenign to 4444...")
})


