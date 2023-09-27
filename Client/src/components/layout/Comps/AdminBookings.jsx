import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user, setUser, loading } = useContext(UserContext);

    console.log(user)
    const fetchBookings = async() => {
        const { data } = await axios.post('/api/v1/admin-bookings', { id: user._id });
        console.log(data.fetchData)
        setBookings(data.fetchData)
    }


    const handleDeleteBooking = async(id) => {
        const { data } = await axios.delete(`/api/v1/deleteBooking/${id}`);
        if (data.success) {
            alert("Booking Deleted Successfully");
            window.location.reload();
        }
    }
    
    useEffect(() => {
        fetchBookings();
    }, [user])
    
  return (
      <div className='h-screen w-full  flex flex-col gap-5  items-center'>
          <div className="flex flex-col justify-center items-center py-5 px-3 h-auto overflow-auto w-full no-scrollbar">
          <div className="flex flex-col gap-2">
                    <h3 className="text-4xl font-bold text-center">Property Bookings</h3>
                    {
                        <p className="text-center italic font-bold text-[#00388D]">Total {bookings.length} Booking</p>
                    }
              </div>
              
              <div className="mt-5 w-1/2 h-auto flex flex-col items-center justify-center  gap-2 p-3">
                  {
                      bookings.map((item, index) => (
                          <div className='flex shadow-lg flex-row justify-between py-5 px-3 gap-4'>
                              <p className="text-green-600 font-extrabold text-3xl">#{index + 1}</p>
                              <div className="relative flex flex-col gap-2 justify-start items-start">
                                 <Link to={`/advertisement/${item.place._id}`}><img src={`http://localhost:8080/uploads/${item.place.images[0]}`} className=' w-36 h-60 object-cover' alt="" /></Link> 
                                  <h2 className="font-extrabold text-xl">{item.place.name}</h2>
                                  <h3 className="font-bold">Price per Night: NRS {item.place.price} /-</h3>
                                  <h3 className="font-bold">Price To Pay: NRS {item.price} /-</h3>
                                  <h3 className="font-bold">Guests: {item.stayNumber} </h3>
                                  <p className="absolute top-0 -left-3 text-white bg-indigo-600 rounded-full px-3 py-2">Room : {item.place.roomType}</p>
                                  
                                  <div className="flex flex-row gap-3 bg-black px-3 py-2 font-semibold">
                                      <p className="text-green-600">CheckIn: {item.checkInDate.slice(0,10)} </p>
                                      <p className="text-red-600">CheckOut: {item.checkOutDate.slice(0,10)} </p>
                                  </div>
                              </div>

                              {/* User Info */}
                              <div className="flex flex-col gap-2 items-center justify-start">
                                  <div className=" h-fit p-5 bg-teal-200">
                                  <h2 className="text-center font-bold underline italic">Contact Guest</h2>
                                  <p className="">Name: Parashar Neupane </p>
                                  <p className="">Contact: 9861488688 </p>
                                  </div>

                                  <div className="">
                                      <button className="bg-red-500 text-white px-3 py-2" onClick={() => {
                                          handleDeleteBooking(item._id)
                                      }}>Remove From Booking List</button>
                                  </div>
                                 

                              </div>

                          </div>
                      ))
                  }
              </div>
          </div>
      
    </div>
  )
}

export default AdminBookings
