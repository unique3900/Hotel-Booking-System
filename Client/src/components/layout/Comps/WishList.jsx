import React, {
    useContext
} from 'react'
import {
    UserContext
} from '../../Context/UserContext';
import {
    productData
} from '../../../Data/data';
import { Link } from 'react-router-dom';

const WishList = () => {
    const {
        wishList,
        setWishlist
    } = useContext(UserContext);



    const handleRemoveWishlist = (id) => {
        try {
            let myWishlist = [...wishList];
            const index = myWishlist.findIndex((e) => {
                e._id===id
            })
            myWishlist.splice(index, 1);
            setWishlist(myWishlist);
            localStorage.setItem('wishlists', JSON.stringify(myWishlist));
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='h-screen  flex flex-col  items-center'>
            <div className=" p-5 h-auto overflow-auto   w-full no-scrollbar">
                <div className="">
                    <h3 className="text-4xl font-bold text-center">Your Wishlist</h3>
                    {
                        <p className="text-center italic font-bold text-[#00388D]">You have {wishList.length} items in Wish list</p>
                    }
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    {
                    wishList.map((item,index) => {
                        return (
                            <div key={
                                    index
                                }
                                className="flex flex-col lg:flex-row items-center shadow-lg px-3 py-5 justify-between gap-5">
                                <div className="w-full h-1/2 lg:w-3/4 lg:h-fit object-cover">
                                    <img src={`http://localhost:8080/uploads/${item.images[0]}`} className='w-full h-fit' alt="" />
                                </div>
                                <div className="flex flex-col gap-4">
                                <div className="">
                                    <h3 className="text-lg font-bold">
                                        {
                                        item.name
                                    }</h3>
                                    </div>
                                    <div className="">
                                        <p className="italic">{item.address }</p>
                                    </div>
                                <div className="">
                                    <h3 className="text-lg">
                                        {
                                        item.description
                                    }</h3>
                                    </div>
                                    
                                    <div className="flex flex-row justify-evenly items-center">
                                        <p className="">{item.roomType}</p>
                                        <p className="">Npr{item.price}</p>
                                        <Link to={`/advertisement/${item._id}`} className="bg-[#1b6714]  px-3 py-2 text-white cursor-pointer">Book This</Link>
                                        <button onClick={() => {
                                            handleRemoveWishlist(item._id)
                                        }} className="bg-red-600  px-3 py-2 text-white cursor-pointer">Remove</button>
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
