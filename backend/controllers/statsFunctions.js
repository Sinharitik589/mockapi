import { ApiModel } from "../model/apiModel";

export const getUserStats = async (req,res) => {
    try{
        const {usid} = req.query;
        const user = await ApiModel.findById(usid,"-_id -__v");
        if(!user) return res.sendStatus(404);
        return res.status(200).send({user});
    }
    catch(e){
        return res.sendStatus(500);
    }
} 