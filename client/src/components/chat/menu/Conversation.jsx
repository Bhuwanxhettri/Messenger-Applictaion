import { Divider } from '@mui/material';
import React, { useEffect ,useContext} from 'react'
import {getUser, setConversation} from '../../../service/api'
import { useState } from 'react'
import { AccountContext } from '../../context/AccountProvider';



const Conversation = () => {

  const {account,setPerson} = useContext(AccountContext);

  const [users,setUser] = useState([]);
  useEffect(()=>{
     const fetchData = async()=>{
        let response = await getUser();
        setUser(response);
     }
     fetchData();
  },[])

  const userList = users.map((user)=>{
        if(user.email !== account.email){
            return(
               <>
               <div onClick={()=>getUserDetails(user)} className='flex my-1 justify-start justify-items-center gap-10 p-2    rounded-md  hover:bg-slate-100 cursor-pointer transition-all'>
                  <img src={user.picture} className="rounded-full w-14 mb-4 " alt="Avatar"/>
                  <h3 className='text-xl my-3 font-semibold'>{user.name}</h3>
               </div>   
               <Divider/>
               </>
            )
        }
  })

  const getUserDetails =async(user)=>{
     setPerson(user)
     await setConversation({senderId:Number(account.sub),reveiverId:Number(user.sub)})
  }
  return (
    <>
       <div className='grid-flow-col h-26 overflow-auto'>
           {userList} 
       </div>
    </>
  )
}

export default Conversation



   




