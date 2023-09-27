import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
import { AiFillEye } from 'react-icons/ai';
import { setDate } from 'date-fns';



const UserBookings = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading,setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
   


    const fetchUserBookings = async () => {
        const { data } = await axios.post('/api/v1/user-bookings', { id: user._id });
        // console.log(data.fetchData)
        if (!data) {
            setLoading(true)
        }
        else {
            setLoading(false)
            setBookings(data.fetchData)
        }
        

       
    }
    useEffect(() => {
        fetchUserBookings();
    }, [])
    
  return (
    <div className='h-full w-full overflow-y-scroll no-scrollbar gap-2  flex flex-col overflow-scroll' >
          <h1 className="text-3xl font-bold text-center">All Bookings</h1>
          {/* className=' */}

          {
              loading ? <p>.....Loading</p>:
                bookings.map((item, index) => (
                    <div className={new Date().getTime() < new Date(item.checkOutDate).getTime()?"relative w-full bg-black overflow-x-auto text-white flex justify-between gap-3 px-3 py-2 rounded-lg items-center'":"relative w-full bg-slate-500 overflow-x-auto text-white flex justify-between gap-3 px-3 py-2 rounded-lg items-center'"}  key={index}>
                        
  
                          <AiFillEye className='cursor-pointer hover:scale-[1.4]'/>
                            <p className="">{index + 1}.</p>
                            <p className="font-bold">{item?.place.name}</p>
                            <p className="text-green-400">CheckIn : {item.checkInDate.slice(0, 10)}</p>
                            <p className="text-red-400">CheckOut : {item.checkOutDate.slice(0, 10)}</p>
                            <p className="">Price : {item.price}</p>
                  
                        
                    </div>
                    
                    
                ))
            
          }
          
          
    </div>
  )
}

export default UserBookings
