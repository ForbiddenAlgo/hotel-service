import React, {useState} from 'react'

//onFormSwitch is the props name for toggleform
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit=(e)=>{
        // not to loose our state
        e.preventDefault();
        console.log(email);
    }

    const emailChange=(e)=>{
        setEmail(e.target.value);
    }
    const passChange=(e)=>{
        setPass(e.target.value);
    }

    
  return (
    <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>
            <label chtmlFor ='email'>email</label>
            <input value={email} onChange={emailChange} type ="email" placeholder='e.g,youremail@email.com' id='email' name='email'/>
            <label htmlFor ='Password'>Password</label>
            <input value={pass} onChange={passChange} type ="Password" placeholder='********' id='Password' name='Password'/>
        </form>
        {/* write a call-back-function to switch form onClick*/}
        <button type ='submit' onClick={()=>props.onFormSwitch('Register')}>Don't have an account yet? Register here.</button>
    </div>
  )
}

export default Login