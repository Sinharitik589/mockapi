import Mongoose  from "mongoose";

const endpointSchema = Mongoose.Schema({
    endpointPath:{type:String,
        required:true
    },
    data:Object
})

const apiSchema = Mongoose.Schema(
    {
        total_requests:{
            type:Number,
            default:0
        },
        time:{
            type:Date,
            default:Date.now()
        },
        endpoints:Array
    }
)

endpointSchema.index({"endpointPath":1});

export const UserModel= Mongoose.model("User",apiSchema);
export const EndPointModel = Mongoose.model("Endpoints",endpointSchema);