import React from 'react'
import Dialog from '@mui/material/Dialog';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../../service/api';

const LoginDailog = () => {
   
    const {setAccount} = useContext(AccountContext);
    const onLoginSucess = async(res)=>{
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res)=>{
        console.log('Login Failed',res);
    }
  return (
    <>
       <Dialog open={true}>
          <h2 className='text-center font-extrabold text-lg p-5'>Messanger Application</h2>
          <GoogleLogin
            onSuccess={onLoginSucess}
            onError={onLoginError}
           />
       </Dialog>
    </>
  )
}

export default LoginDailog