import mongoose from "mongoose";


const userSchema = mongoose.Schema({
        sub:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            requred:true
        },
        name:{
            type:String,
            requred:[true,"Please Enter  Name"],
            trim:true
        },
        picture:{
            type:String,
            required:true
        }
})


export default mongoose.model("User",userSchema);