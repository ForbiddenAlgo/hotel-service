import './Home.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import hotelDataset from '../data/hotelDataset.json';

const Home = () => {

    const Navigate = useNavigate();

  return (
    <>
    <Header/>
    <div className='home_section'>
        {hotelDataset.hotels.map((hotel) => (
            <div className='hotel' key={hotel.hotelId}>
                <img alt='' src={hotel.image}/>
                <div className='hotel_info'>
                    <h2>{hotel.name}</h2>
                    <h4>Location: {hotel.location}</h4>
                </div>
                <div className='hotel_button'>
                <Link to={`/hotels/${hotel.hotelId}`}>
                    <button >View Rooms</button> 
                    </Link>
                </div>
            </div>
        ))}
    </div>
    </>
  );
};

export default Home;
