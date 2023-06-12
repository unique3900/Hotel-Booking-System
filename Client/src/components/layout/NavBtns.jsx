import React, {
    useEffect,
    useState
} from 'react'

const NavBtns = (props) => {
    const btnItems = [
        "Add Advertisement",
        "My Bookings",
        "About Us",
        "Contact Us",
        "Terms and Conditions",
        "Ask a Question"
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
                    btnItems.map((item, index) => {
                        return (
                            <li className="relative group lg:text-[18px] md:text-[14px] whitespace-nowrap"
                                key={index}>
                                <button className="py-2">
                                    {item}</button>
                                <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                            </li>
                        )
                    })
                } </ul>
            </div>

            {
            stat == true && (
                <div className="absolute z-50 top-28 left-4 flex w-fit bg-white  px-5 h-fit lg:hidden">
                    <ul className={`flex flex-col text-black items-baseline text-lg font-semibold `}>
                        {
                        btnItems.map((item, index) => {
                            return (
                                <li className="relative group text-[18px] whitespace-nowrap"
                                    key={index}>
                                    <button className="py-2">
                                        {item}</button>
                                    <div className="absolute -bottom-[1.8rem] group-hover:flex hidden h-1 w-full bg-red-600 "></div>
                                </li>
                            )
                        })
                    } </ul>
                </div>
            )
        } </>

    )
}

export default NavBtns
