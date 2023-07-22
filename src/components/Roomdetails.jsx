import React from 'react';
import { useParams } from 'react-router-dom';
import './RoomDetails.css';
import hotelDataset from '../data/hotelDataset.json';

const RoomDetailsPage = () => {
  const { hotelId, roomId } = useParams();

  const hotel = hotelDataset.hotels.find((hotel) => hotel.hotelId === parseInt(hotelId, 10));
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const room = hotel.rooms.find((room) => room.roomId === parseInt(roomId, 10));
  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className='container'>
      <h2>{hotel.name}</h2>
      <h3>Room Type: {room.roomType}</h3>
      <p>Price: ${room.price}</p>
      <p>Availability: {room.availability}</p>
      <h4>Add-ons:</h4>
      {room.addOns.map((addOn) => (
        <div key={addOn.name}>
          <p>{addOn.name} - ${addOn.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomDetailsPage;
