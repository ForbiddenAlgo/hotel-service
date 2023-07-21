import React from 'react';
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
    // const [profile, setProfile] = useState("");
  return (
    <div className='header'>
        <img className='header_logo' alt='' src={logo} />
        <div className='header_center'>
            <div className='header_button'>Home</div>
            <div className='header_button'>Services</div>
            <div className='header_button'>My Bookings</div>
            <div className='header_button'>About Us</div>
            <div className='header_button'>profile</div>
            {/* <div className='button'>signIn/signUp</div> */}
        </div>
        <div className='header_right'>
            <div className='header_container'>
                <button className='header_sign_button'>signUp</button>
            </div>
        </div>
    </div>
  )
}

export default Header