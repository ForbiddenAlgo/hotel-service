import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import hotelDataset from '../data/hotelDataset.json';

const HotelDetails = () => {
  const { hotelId } = useParams();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [addOns, setAddOns] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingComplete, setBookingComplete] = useState(false); // New state for booking status

  const handleSelectRoom = (roomId) => {
    const room = hotelDataset.hotels
      .find((hotel) => hotel.hotelId === parseInt(hotelId, 10))
      .rooms.find((room) => room.roomId === roomId);

    setSelectedRoom(room);
    setAddOns([]);
    setTotalPrice(room.price);
  };

  const handleAddOnsChange = (event, addOn) => {
    if (event.target.checked) {
      setAddOns([...addOns, addOn]);
      setTotalPrice(totalPrice + addOn.price);
    } else {
      setAddOns(addOns.filter((item) => item !== addOn));
      setTotalPrice(totalPrice - addOn.price);
    }
  };

  const handleBookNow = () => {
    //booking process(e.g., updating room availability, sending booking info to the server, etc.), will do later
    setBookingComplete(true);
  };

  const hotel = hotelDataset.hotels.find((hotel) => hotel.hotelId === parseInt(hotelId, 10));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className='container'>
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <h3>Rooms:</h3>
      {hotel.rooms.map((room) => (
        <div key={room.roomId}>
          <p>Room Type: {room.roomType}</p>
          <p>Price: ${room.price}</p>
          <p>Availability: {room.availability}</p>
          {room.availability === 'available' ? (
            <>
              <button onClick={() => handleSelectRoom(room.roomId)}>Select Room</button>
              <Link
                to={`/hotels/${hotelId}/rooms/${room.roomId}`}
                onClick={() => setSelectedRoom(room)}
              >
                <button>View Room Details</button>
              </Link>
            </>
          ) : (
            <button disabled>Reserved</button>
          )}
        </div>
      ))}
      {selectedRoom && selectedRoom.availability === 'available' && (
        <div>
          <h3>Selected Room: {selectedRoom.roomType}</h3>
          <h4>Price: ${selectedRoom.price}</h4>
          <h4>Add-ons:</h4>
          {selectedRoom.addOns.map((addOn) => (
            <div key={addOn.name}>
              <label>
                <input
                  type="checkbox"
                  checked={addOns.includes(addOn)}
                  onChange={(event) => handleAddOnsChange(event, addOn)}
                />
                {addOn.name} - ${addOn.price}
              </label>
            </div>
          ))}
          <Link to={`/hotels/${hotelId}/rooms/${selectedRoom.roomId}`}>
            <button>Selected Room Details</button>
          </Link>
          <h4>Total Price: ${totalPrice}</h4>
          {!bookingComplete ? 
            // Conditionally rendering the "Book Now" button and success message
            (  <button onClick={handleBookNow}>Book Now</button>) 
            : (
            <p className='success-message'>Your hotel is booked!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
