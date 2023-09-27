import React, { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BookingBox = ({productId,price,maxStay,place,roomAvailable,checkInDate,checkOutDate}) => {
    const [userCheckinDate, setUserCheckinDate] = useState('');
    const [userCheckOutDate, setUserCheckoutDate] = useState('');
    const [rooms, setRooms] = useState(0);
    const [curDate, setCurDate] = useState();
    const [userStayNumber, setUserStayNumber] = useState(1);

    
    
    let numberofNights = 0;



    const enteredCheckIn = new Date(userCheckinDate).getTime();
    const enteredCheckOut = new Date(userCheckOutDate).getTime();

    if (userCheckinDate && userCheckOutDate) {

        numberofNights = differenceInCalendarDays(new Date(userCheckOutDate), new Date(userCheckinDate));
    }

    const handleBookSubmit =  async() => {
        if (!userStayNumber || !userCheckinDate || !userCheckOutDate || !rooms) {
            alert("Please Fill Every Detail")
        }
        else if (roomAvailable < rooms) {
            alert(`Sorry only ${roomAvailable} is available for booking`)
        }

        
        else if (enteredCheckIn < new Date(checkInDate).getTime() || enteredCheckOut > new Date(checkOutDate).getTime()) {
            alert(`Sorry room available from ${checkInDate} to ${checkOutDate}  for booking`)
        }
       else if (numberofNights<=0) {
            alert("Minimum 24 hour stay")
        }
        else if(userStayNumber>maxStay) {
            alert(`Maximun ${maxStay} people allowed`)
        }
        else if (roomAvailable < rooms) {
            alert("Check the availability of Room")
        }
        else {
            const { data } = await axios.post('/api/v1/new-booking', {productId, place, stayNumber: userStayNumber, price: numberofNights * price, checkInDate: userCheckinDate, checkOutDate: userCheckOutDate,rooms });
            console.log(data)
        }
    }
  return (
    <div className="w-full bg-teal-500 p-10 mt-5 shadow-sm flex flex-col gap-4">
    <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
            <label htmlFor="" className='text-white'>Check In:</label>
            <input value={userCheckinDate}  onChange={(e) => {
                setUserCheckinDate(e.target.value)
        }} type="date" className='w-full px-3 py-2'  />
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="" className='text-white'>Check Out:</label>
            <input value={userCheckOutDate}  onChange={(e) => {
                setUserCheckoutDate(e.target.value)
        }} type="date" className='w-full px-3 py-2'  />
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="" className='text-white'>Number of Guest</label>
            <input value={userStayNumber} onChange={(e) => {
                setUserStayNumber(e.target.value)
        }} type="number" className='w-full px-3 py-2' min={1} max={maxStay}  />
              </div>

              <div className="flex flex-col gap-2">
            <label htmlFor="" className='text-white'>Number of Rooms</label>
            <input value={rooms} onChange={(e) => {
                setRooms(e.target.value)
        }} type="number" className='w-full px-3 py-2' min={1} max={maxStay}  />
              </div>
        
    </div>
    
  
          <button  onClick={handleBookSubmit} className={roomAvailable>0? "bg-[#00388D] w-full px-3 py-2 text-white":"bg-[#a4312f] w-full px-3 py-2 text-white" }disabled={roomAvailable<=0?true:false}>{roomAvailable<=0? "Sorry Booking Full":"Book"}   {roomAvailable>0 && numberofNights>0 && (
              <span className="">for NPR {numberofNights *price} /-</span>
          )} </button>
</div>
  )
}

export default BookingBox
