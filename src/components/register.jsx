import React ,{useState} from 'react'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit=(e)=>{
        // not to loose our state
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='auth-form-container'>
        <form onSubmit={handleSubmit}>

            <label htmlFor='name'>Full name</label>
            <input value={name} name ="name" id='name' placeholder='full name'/>
            <label chtmlFor ='email'>email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type ="email" placeholder='e.g,youremail@email.com' id='email' name='email'/>
            <label htmlFor ='Password'>Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type ="Password" placeholder='********' id='Password' name='Password'/>
        </form>
        <button type ='submit' onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register