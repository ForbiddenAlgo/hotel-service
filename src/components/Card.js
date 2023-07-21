import React, {useState} from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';

function Card( {src, title, description} ){

  // const[id, setId] = useState("");
  // const handleClick=(e)=>{
  //   e.preventDefault();
  //   <Link to="/room/1"></Link >
  // }
  return (
    <div className='card'>
        <img src={src} alt=''/>
        <div className='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
        <div className='card_button'>
            <Link to="/room/1">See Rooms</Link>
        </div>
    </div>
  )
}

export default Card
