import express from "express"
import { router } from "./routes/index.js"
import bodyParser from "body-parser";



const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(router)
export { app }