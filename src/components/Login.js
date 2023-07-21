import React , {useState} from 'react'
import { Navigate } from 'react-router-dom';

let email;
let password;
let userCred =[
    {
        email: "abc@gmail.com",
        password:"abc",
    },
    {
        email:"def@gmail.com",
        password:"def",
    },
]

function Login () {

    const[cred, setCred] = useState({});
    const handleLogin =()=>{
        //initializing credentialsMatched
        const credentialsMatched = userCred.find((item)=>
        {
            return item.email === cred?.email && item?.password === cred?.password;
        });
        //if true
        if(credentialsMatched){
            localStorage?.setItem("authToken", "dummyToken");
            Navigate("/home");
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login