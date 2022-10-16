import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import conversationRoute from "./routes/conversationRoute";

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Routes 
app.use(userRoute)
app.use(conversationRoute)

// database connection
const url = "mongodb://localhost:27017/ChatApp";
mongoose.connect(url)
.then(()=>app.listen(8000))
.then(()=>console.log("Connectet to database listining to port 8000"))
.catch((err)=>console.log(err));


