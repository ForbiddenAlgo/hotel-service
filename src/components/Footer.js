import React from 'react'
import "./Footer.css"
import logo from '../assets/logo.png'

let facebook = require("../assets/facebook.png")
let twitter = require("../assets/twitter.png")
let instagram = require("../assets/instagram.png")
let linkedin = require("../assets/linkedin.png")

export const Footer = () => {
  return (
    <div className='footer_top'>
        <div className='footer'>
            <div className='footer_left'>
                <img className='logo_footer' src={logo} alt='' style={{height:"100px"}}/>
                <div className='social_media' style={{display:"flex", alignItems:'center', justifyContent:'space-between'}}>
                    <img src={facebook} alt=''/>
                    <img src={twitter} alt=''/>
                    <img src={instagram} alt=''/>
                    <img src={linkedin} alt=''/>
                </div>
            </div>
            <div className='footer_right'>
                <div className='address_footer'
                style={{display:"flex", alignItems:"center", padding:'10px',}}>
                    <img src='' alt='' style={{marginLeft:"34px", width:"19px"}}/>
                    Avenue Business Park, MG road, South side road,
                    Park street, Bangalore, 000000
                </div>
                <div style={{display:"flex", alignItems:"center", padding:'10px',}}>
                    <img src='' alt=''
                    style={{marginLeft:"34px", width:"19px"}}/>
                    myhotels.hotels@feelathome.com
                </div>
                <div style={{display:"flex", alignItems:"center", padding:'10px',}}>
                    <img src='' alt=''
                    style={{marginLeft:"34px", width:"19px"}}/>
                    +91-036-2929
                </div>
            </div>
        </div>
        
        <div>Copyright ©2023 All rights reserved</div>
    </div>
  )
}
