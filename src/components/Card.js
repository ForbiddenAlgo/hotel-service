import React, {useState} from 'react'
import "./Card.css";

function Card( {src, title, description,price} ){
  return (
    <div className='card'>
        <img src={src} alt=''/>
        <div className='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
        <div className='card_button'>
            <button>Book Now</button>
        </div>
    </div>
  )
}

// let  p1 = require("../assets/room1.jpg");
// let  p2 = require("../assets/room2.jpg");
// let  p3 = require("../assets/room3.jpg");

// function Card(){
//     const[cards]= useState([
//         {
//             src:{p1},
//             title:'Card-1',
//             description: 'lorem ipsum hgjfjhhtguuhhihuhuh'
//         },
//         {
//             src:{p2},
//             title:'Card-2',
//             description: 'lorem ipsum hgjfjhhtguuhhihuhuh'
//         },
//         {
//             src:{p3},
//             title:'Card-3',
//             description: 'lorem ipsum hgjfjhhtguuhhihuhuh'
//         }
//     ])
//     return(
//         <div>
//             <section>
//                 <div className='container'>
//                     <div className='cards'>
//                         {
//                             cards.map((card,i) => (
//                                 <div key={i} className='card'>
//                                     <img>{card.src}</img>
//                                     <h3>{card.title}</h3>
//                                     <p>{card.description}</p>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

export default Card
