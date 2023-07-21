import React, {useState} from 'react'
import './Banner.css';
import {format} from "date-fns";
import {DateRange} from "react-date-range";

let arrival_vector = require("../assets/arrival.png")
let downvec= require("../assets/caret-down.png");
let persons = require("../assets/persons.png");
let location = require("../assets/location.png");
let upvec = require("../assets/caret-up.png");

const Banner = () => {

  const[date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    persons: 1,
  })
  const[showSearch, setShowSearch] = useState(false);

  const handleOption =(name, operation)=>{
    setOptions((prev) => {
      return{
        ...prev,
        [name]:operation === "i" ? options[name]+1 : options[name]-1,
      }
    })
  }

  return (
    <>
      <div className='banner'>
        <div className='banner_search'>
          {
            showSearch &&
            <DateRange
          editableDateInputs ={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className='date'
          minDate={new Date()}
          />
        }
        </div>
        <div className='banner_info' >
          <h4>
            Enjoy your vacation with myhotels!
          </h4>
          <h1 style={{marginTop:"0px", color:"#eb8a04"}}>
            Let us plan you a perfect holiday
          </h1>
          <button>Explore Now</button>
        </div>
      </div>
      <div className='booking_div'>
        <div className='booking'>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"center"}}>
            <div className='banner_main_div'>
              <div className='booking_header'>
                <img className='booking_vector' alt="" src={arrival_vector}
                style={{height: "20px"}}
                />
                <h4>Arrival Date</h4>
                <img className='booking_vector2' src={downvec} alt=''
                style={{height: "12px"}}
                onClick={()=> setShowSearch(true)}/>
              </div>
              <div className='booking_bof'>
                <h2>{`${format(date[0].startDate, "dd MMM")}`}</h2>
                <h4>{`${format(date[0].startDate, "EEEE")}`}</h4>
              </div>
            </div>
            <div className='banner_main_div'>
              <div className='booking_header'>
                <img className='booking_vector' alt="" src={arrival_vector}
                style={{height: "20px"}}/>
                <h4>Check out</h4>
                <img className='booking_vector2' src={downvec} alt=''
                style={{height: "12px"}}
                onClick={()=> setShowSearch(false)}/>
              </div>
              <div className='booking_bof'>
                <h2>{`${format(date[0].endDate, "dd MMM")}`}</h2>
                <h4>{`${format(date[0].endDate, "EEEE")}`}</h4>
              </div>
            </div>

            <div className='banner_main_div'>
              <div className='booking_header'>
                <img className='booking_vector' alt="" src={persons}
                style={{height: "20px"}}/>
                <h4>Persons</h4>
              </div>
              <div className='booking_bo'>
                <h2>{`${options.persons}`}</h2>
                 <div className='booking_noo'>
                 <div onClick={()=> handleOption("persons", "i")}>
                  <button style={{border:"none", background:"transparent"}}>
                    <img src={upvec} alt='' style={{height: "12px"}}/>
                  </button>
                 </div>
                 <div>
                 <button style={{border:"none", background:"transparent"}}
                 disabled={options.persons <= 1}
                 onClick={()=> handleOption("persons", "d")}>
                    <img src={downvec} alt='' style={{height: "12px"}}/>
                  </button>
                 </div>
                 </div>
              </div>
            </div>

            <div className='banner_main_div'>
              <div className='booking_header'>
                <img className='booking_vector' alt="" src={location}
                style={{height: "20px"}}/>
                <h4>Location</h4>
              </div>
            </div>

                <div className='banner_main_div' style={{paddingTop:"0px"}}>
                  <h4 className='faded_text'>Hope You Have a Nice Experience . . .</h4>
                  <div className='booking_button'>
                    <button>Check Availability</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner