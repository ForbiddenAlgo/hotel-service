import React from 'react';
import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logout } from '../pages/actions';

const Header = () => {
    // const Navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('authToken');
        navigate('/loginPage');
    }
  return (
    <div className='header'>
        <img className='header_logo' alt='' src={logo} />
        <div className='header_center'>
            <div className='header_button' >Home</div>
            {/* <div className='header_button'>Services</div>
            <div className='header_button'>My Bookings</div>
            <div className='header_button'>About Us</div>
            <div className='header_button'>profile</div> */}
            {/* <div className='button'>signIn/signUp</div> */}
        </div>
        <div className='header_right'>
            <div className='header_container'>
            <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header