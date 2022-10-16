import User from "../model/user";

export const register = async(req,res)=>{
     const {sub,email,name,picture} = req.body;
     let user;
     try{
        let exist = await User.findOne({email});
        if(exist){
           return res.json({message:"user already exist"})
        }
        user  = await User.create(
          {
               sub,
               email,
               name,
               picture
          }
        )
     }catch(err){
          console.log(err);
     }

     if(!user){
        return res.json({message:"data cannot send"});
     }
     return res.json({message:"user data saved"});
}

export const getUser = async(req,res)=>{
    let user;
    try{
       user  = await User.find();
    }catch(err){
        console.log(err)
    }
    if(!user){
       return res.json({message:"user not found"});
    }
    return res.json(user);
}

