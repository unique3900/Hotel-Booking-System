import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyAdvertisement from './MyAdvertisement';
import UserBookings from './UserBookings';

const MyProfile = () => {
    const { user, setUser, loading } = useContext(UserContext);
    const [checkedId, setcheckedId] = useState(1);
    const navigate = useNavigate();
    const { subpage } = useParams(); 

    useEffect(() => {
      // if (!user || !loading) {
      //     alert("Login to access this page")
      //          navigate('/login')
      //       }
      console.log(user)
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
            <div className="flex flex-col px-5 py-4 w-full gap-5 ">
                <h2 className="text-center font-bold text-xl">Your Profile</h2>
              <div className="flex flex-row justify-start gap-5">
                <h3 className="">Name:</h3>
                <h4 className="">{user.fullName }</h4>
                </div>
              <div className="flex flex-row justify-start gap-5">
                <h3 className="">Email:</h3>
                <h4 className="">{user.email }</h4>
                </div>
              <div className="flex flex-row justify-start gap-5">
                <h3 className="">Phone Number:</h3>
                <h4 className="">{user.phone }</h4>
                </div>
              <div className="flex flex-col lg:flex-row justify-start gap-5">
                <Link to={`/change-password/${user.email}`} className="w-full px-3 py-2 text-center text-white font-bold bg-[#9333ea] ">Change Password</Link>
                {/* <Link to={'/update-profile'} className="w-full px-3 py-2 text-center text-white font-bold bg-[#6dea33] ">Update Profile</Link> */}
                </div>
            </div>
          )
        }

{
          
          subpage == 'my-bookings' && (
            <UserBookings/>
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
