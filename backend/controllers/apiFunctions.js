import { EndPointModel } from "../model/apiModel";
import Mongoose from 'mongoose';

export const getEndPoint = async (req,res) => {
    try{
        const {id,endpoint} = req.params;
        const endpointDocuments = await EndPointModel.find({endpointPath:`${id}/${endpoint}`},"data _id");
        const finalDocs = endpointDocuments.map(val=>({_id:val._id,...val.data}));
        return res.status(200).send(finalDocs);
    }
    catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export const getEndPointData =  async (req,res) => {
    try{
        const {_id} = req.params;
        const endPointData = await EndPointModel.findById(_id,"-endpointPath");
        if(endPointData) return res.status(200).send({_id:endPointData._id,...endPointData.data})
        else return res.sendStatus(403);
    }
    catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export const createNewEndpointData = async (req,res) => {
    try{
        const {id,endpoint} = req.params;
        const _id = new Mongoose.mongo.ObjectId();
        const endPointData = new EndPointModel({
            endpointPath:`${id}/${endpoint}`,
            data:req.body,
            _id:_id
        })
        await endPointData.save();
        return res.status(200).send({_id,...req.body});
    }
    catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export const editEndPoint = async (req,res) => {
    try{
        const {_id} = req.params;
        const data = req.body;
        const newDoc = await EndPointModel.findByIdAndUpdate(_id,{data:data});
        if(newDoc) return res.status(200).send({_id:newDoc._id,...newDoc.data});
        return res.sendStatus(403);
    }
    catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}

export const deleteEndPoint = async (req,res) => {
    try{
        const {id,endpoint,_id} = req.params;
        const doc =await EndPointModel.findByIdAndDelete(_id);
        if(doc) return res.sendStatus(200);
        return res.sendStatus(403);
    }
    catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
} 