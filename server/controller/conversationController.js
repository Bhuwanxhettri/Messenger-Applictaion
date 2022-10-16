import Conversation from '../model/conversation'

export const newConverstation = async(req,res)=>{
       try{
         const senderId = req.body.senderId;
         const reveiverId = req.body.reveiverId;

         const exit = await Conversation.findOne({members:{$all:[reveiverId,senderId]}});

         if(exit){
            return res.json("converstaion already exist");
         } 

         const newConverstation = new Conversation({
               members:[senderId,reveiverId],
         })

         await newConverstation.save();

         return res.status(200).json("Converstion added sucessfully");

       }catch(err){
         return console.log(err);
       }
}