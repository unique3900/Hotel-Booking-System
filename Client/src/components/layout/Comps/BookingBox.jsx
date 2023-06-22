import React, { useState } from 'react'
import { differenceInCalendarDays } from 'date-fns';
const BookingBox = ({price,maxStay}) => {
    const [userCheckinDate, setUserCheckinDate] = useState('');
    const [userCheckOutDate, setUserCheckoutDate] = useState('');
    const [curDate, setCurDate] = useState();
    const [userStayNumber, setUserStayNumber] = useState(1);

    let numberofNights = 0;
    if (userCheckinDate && userCheckOutDate) {
        numberofNights = differenceInCalendarDays(new Date(userCheckOutDate), new Date(userCheckinDate));
    }

    const handleBookSubmit =  () => {
        if (!userStayNumber || !userCheckinDate || !userCheckOutDate) {
            alert("Please Fill Every Detail")
        }
       else if (numberofNights<=0) {
            alert("Minimum 24 hour stay")
        }
        else if(userStayNumber>maxStay) {
            alert(`Maximun ${maxStay} people allowed`)
        }
        else {
            alert("Booked")
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
        
    </div>
  
          <button onClick={handleBookSubmit} className="bg-[#00388D] w-full px-3 py-2 text-white">Book  {numberofNights>0 && (
              <span className="">for NPR {numberofNights *price} /-</span>
          )} </button>
</div>
  )
}

export default BookingBox
