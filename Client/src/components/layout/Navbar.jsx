import React, { useContext, useState } from 'react'
import {
    FiMenu
} from 'react-icons/fi';
import {
    AiOutlineUser
} from 'react-icons/ai';
import {BiLogIn,BiUserCircle} from 'react-icons/bi'
import NavBtns from './NavBtns';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
const Navbar = () => {
    const [navStatus, setnavStatus] = useState(false);
    const { user,setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        
        document.cookie = "token"+'=;expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
        navigate('/login')
        
    }
    
    return (
        <div className='w-full text-black  bg-white flex justify-between items-center px-10 z-20'>
            {/* Left */}

            <div className=" lg:hidden ">
          <FiMenu className='w-7 h-7 cursor-pointer' onClick={() => {
            setnavStatus(!navStatus);
                }}  />
            </div>


            {/*  Center */}

            <div className="-my-3 whitespace-nowrap">
                <Link to='/'><img src={'/img/BOOK.png'}
                    className=' w-32'
                    alt="Logo"/></Link>
            </div>


        <NavBtns navStat={navStatus} />
        {/* Right */}
            {/* <div className=" lg:hidden bg-[#00388D] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <AiOutlineUser  className='text-white h-[28px]'/>
            </div> */}
            {
                !user  ? (
                    <div className='flex flex-col lg:flex-row items-center gap-[8px]'>

                
                    <Link to={'/login'} className="text-lg md:text-base px-3 font-semibold cursor-pointer ">Login</Link>
                    <Link to={'/register'}><button className="bg-[#00388D] p-2 px-3 rounded-full text-white">Signup</button></Link> 
    
                    
    
                </div>
                ) : (
                        <div className="flex items-center justify-between gap-2">
                                <BiLogIn className="w-10 h-10 cursor-pointer" onClick={handleLogout}>Logout</BiLogIn>
                            <Link to={`/my-account`} className="flex gap-1 items-center cursor-pointer bg-gray-200 rounded-full p-3">
                                <BiUserCircle className="w-10 h-10 " />
                                <p className="italic whitespace-pre-wrap ">{user.fullName }</p>
                                </Link>
                        </div>
                    
                )
            }



        </div>
    )
}

export default Navbar
