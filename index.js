import  Express  from "express";
import cors from "cors";
import apiRoute from "./backend/controllers/apiController";
import statusRoute from "./backend/controllers/statsController";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from 'path';
const app = Express();
dotenv.config()
app.use(cors());
app.use(Express.json(
    {
        limit:"10kb"
    }
));


app.use("/api",apiRoute);
app.use("/stats",statusRoute);
app.use("/assets",Express.static(path.join(__dirname,'dist','assets')));
app.use("/.well-known",Express.static(path.join(__dirname,'.well-known')));
app.get("*",(req,res) => {
    return res.sendFile(path.join(__dirname,'dist','index.html'));
})

const connectToDB = async () => {
    try{
        console.log({val:process.env.MONGO_URI})
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("Connected to db");
    }
    catch(e){
        console.log({e});
    }
}

connectToDB()

app.listen(process.env.PORT,() => {
    console.log("App running on "+process.env.PORT)
})