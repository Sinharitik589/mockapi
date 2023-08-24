import { ApiModel } from "../model/apiModel";
import Mongoose from 'mongoose';

export const getUserStats = async (req,res) => {
    try{
        const {usid} = req.query;
        const user = await ApiModel.findById(usid,"-_id -__v");
        if(!user) return res.sendStatus(404);
        return res.status(200).send({user});
    }
    catch(e){
        console.log({e})
        return res.sendStatus(500);
    }
} 
export const createMongoId =  (req,res) => {
    const _id = new Mongoose.mongo.ObjectId();
    return res.status(200).send(_id);
}