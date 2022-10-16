import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/register`,data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ',error);
    }
}

export const getUser = async ()=>{
    try{
       let response = await axios.get(`${url}/user`);
       return response.data;
    }catch(error){
        console.log('Error while calling addUser API ',error);
    }
}

export const setConversation = async(data)=>{
    console.log("hello");
     try{
         await axios.post(`${url}/conversation/add`,data);
     }catch(err){
        console.log('Error while calling addUser API ',err);
     }
}