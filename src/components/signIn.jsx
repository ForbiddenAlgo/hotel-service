import React,{useState} from 'react'
import Login from './components/login';
import Register from './components/register';

const SignIn = () => {
    //to decide which from to display
  const [currentForm, setCurrentForm] = useState('Login');

  //toggle between the two forms
  const toggleform =(formName) =>{
    setCurrentForm(formName);
  }
  return (
    <div>
        {
        //ternary operator
        //onFormSwitch will be the props to call toggleform
        currentForm === 'Login' ? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
      }
    </div>
  )
}

export default SignIn