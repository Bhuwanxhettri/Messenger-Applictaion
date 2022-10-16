import mongoose from "mongoose";

const conversactionSchema = mongoose.Schema({
        
       members:{
           type:Array
       },
       message:{
           type:String
       }},
       { timestamps: true }
)


export default mongoose.model("Conversation",conversactionSchema);