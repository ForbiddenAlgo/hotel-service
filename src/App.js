import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
// import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const PrivateRouterForLogin=({children}) => {
    const authToken = localStorage.getItem("authToken");

    const Navigate = useNavigate(); 
    if(!authToken)
    {
      return children; //here, login page again
    }
    else //if credentials exists, go to home
    {
      return <Navigate to={"/home"}/>
    }
  }

  //to home page
  const PrivateRoute =({children}) =>{
    const authToken = localStorage.getItem("authToken");
    if(authToken)
    {
      return children; //home
    }
    else{
      return <Navigate to={"/login"}/>
    }
  }

  return (
    <div className="App">
      <Home/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/login' //login
          element={
            <PrivateRouterForLogin>
              <Login/>
            </PrivateRouterForLogin>
          }/>
          <Route path='/home'
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
