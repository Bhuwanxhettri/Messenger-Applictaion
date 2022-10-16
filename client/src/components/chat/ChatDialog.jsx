import React, { useContext } from 'react'
import ChatBox from './chatMessage/ChatBox';
import EmptyChat from './chatMessage/EmptyChat';
import Menu  from './menu/Menu';
import { AccountContext } from '../context/AccountProvider';



const ChatDialog = () => {
  const {person} = useContext(AccountContext);

  return (
    <>
     <div className='px-6 pt-2'>
        <div className='flex justify-between p-2 w-full '>
                <div className='p-2 w-4/12 '>
                    <Menu/>
                </div>
                <div className='w-8/12' style={{backgroundColor: "#F3EFEA"}}>
                   {
                     person?<><ChatBox/></>:<><EmptyChat/> </>
                   }   
                </div>
          </div>

     </div>
    </>
  )
}

export default ChatDialog