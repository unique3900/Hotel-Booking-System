import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyAdvertisement from './MyAdvertisement';

const MyProfile = () => {
    const { user, setUser, loading } = useContext(UserContext);
    const [checkedId, setcheckedId] = useState(1);
    const navigate = useNavigate();
    const { subpage } = useParams(); 

    useEffect(() => {
        if (!user && !loading) {
               navigate('/login')
            }
    }, [user])
    

    
    const AccountData = [
        { id: 1, title: "My profile",link:'/my-account/my-profile' },
        { id: 2, title: "My Bookings",link:'/my-account/my-bookings' },
        { id: 3, title: "My Advertisements",link:'/my-account/my-advertisements' }
    ];

    const ClassCheckedStyle = "bg-purple-600 text-white";

    
  return (
    <div className='h-screen w-full p-10 flex flex-col gap-10 place-items-center '>
          <div className="flex flex-row gap-3 justify-center mt-5 px-10">
              {
                  AccountData.map((item) => {
                      return (
                          <Link to={`${item.link}`}  className={`${checkedId == item.id ? ClassCheckedStyle : "text-black"} px-3 py-2 rounded-2xl font-bold   text-center`} onClick={() => {
                              setcheckedId(item.id)
                        }} key={item.id}>{item.title}</Link>
                      )
                     
                  })
                }
          </div>
          
          <div className="h-screen w-3/4 shadow-xl flex justify-center p-10">
        {
          
          subpage == 'my-profile' && (
            <h1>Hey</h1>
          )
        }
        
        {
          subpage == 'my-advertisements' && (
            <MyAdvertisement/>
          )
        }
             
          </div>
    </div>
  )
}

export default MyProfile
