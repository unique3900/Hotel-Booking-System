import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { UserContext } from '../../Context/UserContext';
const HomepageListing = () => {
    const [advertisement, setAdvertisement] = useState([]);
    const { wishList,setWishlist } = useContext(UserContext);
    useEffect(() => {
        const fetchData = async() => {
            const { data } = await axios.get('/api/v1/advertisements');
            setAdvertisement(data.fetchdata);
            console.log(data)
        }
        fetchData();
    }, [])
    
    return (
        <div className='w-full h-screen flex flex-col p-10 gap-5'>
            <div className="">
                <h3 className="text-4xl text-black font-bold text-center
                                  ">Latest Destination</h3>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row justify-evenly flex-wrap">

                {
                    advertisement.map((item) => {
                        return (
                            <div key={item._id} className= "relative bg-white shadow-lg flex flex-col gap-5 p-5 place-items-center h-auto lg:w-1/4">
                            <div className="w-full">
                                <img src="https://cdn.ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg" className=' object-cover w-full h-72' alt="" />
                                
                            </div>
                                <div className="absolute  left-2 top-1 shadow-2xl  bg-red-500 px-4 py-2 rounded-full text-white">Rs {item.price}</div>
                
                                <AiOutlineStar className='absolute top-1 right-0 text-yellow-400 w-12 h-12 cursor-pointer' onClick={() => {
                                    setWishlist([...wishList, item]);
                                    localStorage.setItem('wishlists',JSON.stringify([...wishList,item]))
                                }}/>
                        
                            <div className="max-h-32">
                                    <h4 className="text-2xl font-bold ">{ item.name}</h4>
                            </div>
                            <div className="flex flex-row justify-between gap-8">
                                    <p className="">{item.roomType }</p>
                                    <p className="">{ item.city}</p>
                            </div>
                            <div className="">
                                { item.description.slice(0,160) + '.....'}
                            </div>
                            <div className="flex flex-row justify-between gap-10">
                                <button className="bg-[#00388D]  px-3 py-2 text-white cursor-pointer">View More</button>
                                <button className="bg-[#1b6714]  px-3 py-2 text-white cursor-pointer">Book This</button>
                            </div>
                            
        
        
                        </div>
                        )
                    })
            }
          
            
        
       

             

            </div>

        </div>
    )
}

export default HomepageListing
