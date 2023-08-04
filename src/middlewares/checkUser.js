import { UserModel } from "../model/apiModel";

export default async function (req,res,next) {
    console.log("Middleware called");
    const {id,endpoint} = req.params;
    let user = await UserModel.findById(id);
    if(!user) {
        let newUser = new UserModel({total_requests:1,_id:id,endpoints:[endpoint]})
        await newUser.save();
    }
    else if(user.total_requests>100) return res.status(403).send("Threshold limit of 100 reached");
    else {
        user.total_requests+=1;
        if(!user.endpoints.find(val=>val==endpoint)) user.endpoints=[...user.endpoints,endpoint];
        await user.save();
    }
    next();
}