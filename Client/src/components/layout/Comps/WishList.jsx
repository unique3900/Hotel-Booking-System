import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';

const WishList = () => {
    const { wishList,setWishlist } = useContext(UserContext);
  return (
      <div>
          {
              wishList.map((item) => {
                  return (
                    <p key={item._id} className="">{item.name} <span><br/></span></p>
                  )
              })
          }
          
             
      
    </div>
  )
}

export default WishList
