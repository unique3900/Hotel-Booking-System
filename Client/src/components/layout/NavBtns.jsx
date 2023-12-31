import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { AiTwotoneStar } from 'react-icons/ai';

const NavBtns = (props) => {
    const { wishList, setWishlist } = useContext(UserContext);
    const { user,setUser } = useContext(UserContext);
    const btnItems = [
        {
            name: "Add Advertisement",
            to: "add-advertisement"
        },
        {
            name: "Bookings",
            to: "bookings"
        },
        {
            name: "About",
            to: "about"
        },
        {
            name: "Contact",
            to: ""
        }, {
            name: "Terms and Conditions",
            to: ""
        },

    ];
    const [stat, setstat] = useState(props.navStat);
    useEffect(() => {
        console.log(props.navStat)
        setstat(props.navStat);
    }, [props.navStat])

    return (
        <>
            <div className="relative hidden lg:flex ">

                <ul className={`flex flex-row justify-between md:gap-2 items-center space-x-10  text-orange-800 text-lg font-semibold `}>
                    
                    {
                        user && (
                            <>
                                                <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link  to={'/add-advertisement'}className="py-2">Add Advertisement</Link>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/bookings'} className="py-2">Bookings</Link>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                            </>
                        )
                    }

                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/contact'} className="py-2">Contact us</Link>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/about'} className="py-2">About us</Link>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/terms'} className="py-2">Terms and Condition</Link>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/wishlist'} className="relative py-2"><AiTwotoneStar className='text-yellow-500 w-16 h-12'/></Link>
                        <p className="absolute bg-red-500 text-white rounded-full top-1 right-2 px-1.5 z-10 ">{wishList.length}</p>
                        <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                    </li>
                </ul>
            </div>

            {
            stat == true && (
                <div className="absolute z-50 top-28 left-4 flex w-fit bg-white  px-5 h-auto py-10 lg:hidden">
                    <ul className={`flex flex-col text-black items-baseline text-lg font-semibold gap-4 `}>

                            {
                                user && (
                                    <>
                                           <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link  to={'/add-advertisement'}className="py-2">Add Advertisement</Link>
                       
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/bookings'} className="py-2">Bookings</Link>
                        
                    </li>
                                    </>
                                )
                            }
                 
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/contact'} className="py-2">Contact us</Link>
                        
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/about'} className="py-2">About us</Link>
                        
                    </li>
                    <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">
                        <Link to={'/wishlist'} className="py-2">Terms and Condition</Link>
                        
                            </li>
                            <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap">

                                 <Link to={'/wishlist'} className="relative py-2 bg-yellow-400 px-3 text-white">Wishlists</Link>
                
                        
                    </li>
                    </ul>
                </div>
            )
        } </>

    )
}

export default NavBtns
