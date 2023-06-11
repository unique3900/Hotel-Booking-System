import React, { useState } from 'react'
import {
    FiMenu
} from 'react-icons/fi';
import {
    AiOutlineUser
} from 'react-icons/ai';
import NavBtns from './NavBtns';
const Navbar = () => {
  const [navStatus, setnavStatus] = useState(false);
    return (
        <div className='w-full text-black  bg-white flex justify-between items-center px-10'>
            {/* Left */}

            <div className="lg:hidden">
          <FiMenu className='w-7 h-7 cursor-pointer' onClick={() => {
            setnavStatus(!navStatus);
                }}  />
            </div>


            {/*  Center */}

            <div className="-my-3">
                <img src={'./img/BOOK.png'}
                    className='w-32'
                    alt="Logo"/>
            </div>


        <NavBtns navStat={navStatus} />
        {/* Right */}
            <div className=" lg:hidden bg-[#00388D] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <AiOutlineUser className='text-white h-[28px]'/>
            </div>
            <div className=" hidden lg:flex flex-row items-center gap-[8px]">

                <p className="text-lg font-semibold cursor-pointer ">Login</p>
                <button className="bg-[#00388D] p-2 px-3 rounded-full text-white">Signup</button>

            </div>


        </div>
    )
}

export default Navbar
