import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Comps/Hero';
import { Routes, Route } from "react-router-dom"
import Login from './components/layout/Auth/Login';
import Register from './components/layout/Auth/Register';

const App = () => {
    return (
        <div>
            <div className="h-screen w-full ">
                <Navbar />
               
                <Routes>
                    <Route path='/' element={<Hero/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />

                </Routes>
            </div>
        </div>
    )
}

export default App
