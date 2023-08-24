import { ApiModel } from "../model/apiModel";

export default async function (req,res,next) {
   try{
    const {id,endpoint} = req.params;
    let user = await ApiModel.findById(id);
    if(!user) {
        let newUser = new ApiModel({total_requests:1,_id:id,endpoints:[endpoint]})
        await newUser.save();
    }
    else if(user.total_requests>40) return res.status(403).send("Threshold limit of 40 reached");
    else {
        user.total_requests+=1;
        if(!user.endpoints.find(val=>val==endpoint)) user.endpoints=[...user.endpoints,endpoint];
        await user.save();
    }
    next();
   }
   catch(e){
    console.log({e});
   }
}