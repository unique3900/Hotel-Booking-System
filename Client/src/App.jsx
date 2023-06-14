import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Comps/Hero';
import { Routes, Route } from "react-router-dom"
import Login from './components/layout/Auth/Login';
import Register from './components/layout/Auth/Register';
import AddAdvertisement from './components/layout/Comps/AddAdvertisement';
import axios from 'axios';
import MyProfile from './components/layout/Comps/MyProfile';


axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.withCredentials = true;
const App = () => {
    return (
        <div>
            <div className="h-screen w-full ">
                <Navbar />
               
                <Routes>
                    <Route path='/' element={<Hero/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/my-account/:subpage?' element={<MyProfile />} />
                    <Route path='/add-advertisement' element={<AddAdvertisement/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App
