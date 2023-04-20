import React, { useState } from "react";

const Bookticket = ({name}) => {
    const [timeslot, setTimeSlot] = useState()
    const [quantity, setQuantity] = useState(0)
    const [bookingData, setBookingData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setBookingData({name, timeslot, quantity});
        console.log({name, timeslot, quantity})
    }
  return (
    <div className="form" onSubmit={handleSubmit}>
        <form action="">
        <div className="form">
          <label htmlFor="">Movie Name</label>
          <input type="text" value={name} disabled/>
          <label htmlFor="timeslot">Time-Slot</label>
          <select id="timeslot" name="" onChange={(e) => setTimeSlot(e.target.value)}>
            <option value="4-6">4-6 pm</option>
            <option value="6-8">6-8 pm</option>
            <option value="8-10">8-10 pm</option>
          </select>
          <label htmlFor="">Quantity</label>
          <input type="number" placeholder="no. of tickets" onChange={(e) => setQuantity(e.target.value)}/>
          <button type="submit">Buy Ticket</button>
        </div> 
    </form>

    <div className="bookindData">
        { bookingData.name &&bookingData.timeslot && bookingData.quantity ? (
    
            <div>
                
                <h1>Booking Confirmed</h1>
                <p>Booking Details:-</p>
                <h2>Name-{bookingData.name}</h2>
                <h2>Time Slot-{bookingData.timeslot} PM</h2>
                <h2>Quantity-{bookingData.quantity}</h2>
            </div>
        ): null}
    </div>
    </div>
  );
};

export default Bookticket;
