import  Express  from "express";
import cors from "cors";
import apiRoute from "./controllers/apiController"
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = Express();
dotenv.config()
app.use(cors());
app.use(Express.json());


app.use("/api",apiRoute);


app.get("*",(req,res) => {
    return res.status(200).send("Working");
})

const connectToDB = async () => {
    try{
        console.log({val:process.env.MONGO_URI})
        await mongoose.connect(`${process.env.MONGO_URI}/mockapi`);
        console.log("Connected to db");
    }
    catch(e){
        console.log({e});
    }
}

connectToDB()

app.listen(5000,() => {
    console.log("App running on localhost:5000")
})