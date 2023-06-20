import React, {
    useContext
} from 'react'
import {
    UserContext
} from '../../Context/UserContext';
import {
    productData
} from '../../../Data/data';

const WishList = () => {
    const {
        wishList,
        setWishlist
    } = useContext(UserContext);
    return (
        <div className='h-screen  flex flex-col justify-center items-center'>
            <div className=" p-5 h-auto overflow-auto   w-full no-scrollbar">
                <div className="">
                    <h3 className="text-4xl font-bold text-center">Your Wishlist</h3>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    {
                    productData.map((item) => {
                        return (
                            <div key={
                                    item.id
                                }
                                className="flex flex-col lg:flex-row items-center shadow-lg px-3 py-5 justify-between gap-5">
                                <div className="w-full h-1/2 lg:w-3/4 lg:h-fit object-cover">
                                    <img src={item.image} className='w-full h-fit' alt="" />
                                </div>
                                <div className="flex flex-col gap-4">
                                <div className="">
                                    <h3 className="text-lg font-bold">
                                        {
                                        item.propertyName
                                    }</h3>
                                    </div>
                                    <div className="">
                                        <p className="italic">Pokhara New Road</p>
                                    </div>
                                <div className="">
                                    <h3 className="text-lg font-bold">
                                        {
                                        item.PropertyDescription
                                    }</h3>
                                    </div>
                                    
                                    <div className="flex flex-row justify-evenly items-center">
                                        <p className="">{item.roomType}</p>
                                        <p className="">Npr{item.price}</p>
                                        <button className="bg-[#1b6714]  px-3 py-2 text-white cursor-pointer">Book This</button>
                                        <button className="bg-red-600  px-3 py-2 text-white cursor-pointer">Remove</button>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                } </div>


            </div>
        </div>
    )
}

export default WishList
