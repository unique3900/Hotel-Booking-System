import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Comps/Hero';
import { Routes, Route } from "react-router-dom"
import Login from './components/layout/Auth/Login';
import Register from './components/layout/Auth/Register';
import AddAdvertisement from './components/layout/Comps/AddAdvertisement';
import axios from 'axios';
import MyProfile from './components/layout/Comps/MyProfile';
import MyAdvertisement from './components/layout/Comps/MyAdvertisement';
import Homepage from './components/layout/Comps/Homepage';
import WishList from './components/layout/Comps/WishList';
import SingleAdertisementPage from './components/layout/Comps/SingleAdertisementPage';
import UserBookings from './components/layout/Comps/UserBookings';
import AdminBookings from './components/layout/Comps/AdminBookings';
import ChangePassword from './components/layout/Comps/ChangePassword';


axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.withCredentials = true;
const App = () => {
    return (
        <div>
            <div className="h-screen w-full ">
                <Navbar />
               
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/change-password/:email' element={<ChangePassword />} />
                    <Route path='/my-account/:subpage?' element={<MyProfile />} />
                    <Route path='/my-account/my-advertisements/add-advertisement' element={<AddAdvertisement/>} />
                    <Route path='/my-account/my-advertisements/advertisement/:id' element={<AddAdvertisement/>} />
                    <Route path='/add-advertisement' element={<AddAdvertisement/>} />
                    <Route path='/wishlist' element={<WishList />} />
                    <Route path='/bookings' element={<AdminBookings />} />
                    <Route path='/advertisement/:id' element={<SingleAdertisementPage/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App
