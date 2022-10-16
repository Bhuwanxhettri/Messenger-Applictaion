import React, { useContext } from 'react'



// componet import
import LoginDailog from './account/LoginDailog'
import ChatDialog from './chat/ChatDialog'
import { AccountContext } from './context/AccountProvider';

const Messanger = () => {
  const {account} = useContext(AccountContext);
  return (
    <>
      {
        account ?<>
            <ChatDialog/>
        </> :
        <>
            <div className='bg-slate-400 h-full'>
              <div className='bg-blue-500 h-56'>
              </div>
            </div>
              <LoginDailog/>
        </>
      }
        
    </>
  )
}

export default Messanger