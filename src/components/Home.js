import React from 'react'
import Header from './Header'
import Card  from './Card';
import './Home.css';
// import {Link} from 'react-router-dom';

let  p1 = require("../assets/room1.jpg");
let  p2 = require("../assets/room2.jpg");
let  p3 = require("../assets/room3.jpg");

function Home(){
  return (
    <div>
        <Header/>
        <div className='home_section'>
                <Card src={p1} title='Hotel 1 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home." id="1"
                />
                <Card src={p2} title='Hotel 2 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home." id="2"/>
                
                <Card src={p3} title='Hotel 3 by myHotels'
                description="Start your holidays with Hotel 1 and feel as comfortable as your own home." id="3"/>
               
        </div>
    </div>
  )
}
export default Home