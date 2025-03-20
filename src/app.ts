import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express"


const app  = express();

dotenv.config();

//Configure middleware 
app.use(
  express.json(),
  cors()
)

//Connect to database
const MONGODDB_URI = process.env.MONGODB_URI as string;

mongoose.connect(MONGODDB_URI)
.then(()=>console.log("🎉Database successfully connected"))
.catch((err)=>
console.log(`Error connecting to database: ${err}`))


export default app;
