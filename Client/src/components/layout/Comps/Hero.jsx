import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import '../Hero.css'
import Select from 'react-select';
import {
    colourOptions
} from '../../../Data/data';
import {
    UserContext
} from '../../Context/UserContext';
import {
    useNavigate
} from 'react-router-dom';
import ListAdvertisements from './ListAdvertisements';
import axios from 'axios';

const Hero = () => {
    const {
        user,
        setUser,
        loading
    } = useContext(UserContext);
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [address, setAddress] = useState("Bhaktapur");


    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];


    const handleSearch = async() => {
        const { data } = await axios.post('/api/v1/search', { checkInDate, checkOutDate, address });
        console.log(data)
    }
    return (
        <section className="relative lg:h-[70vh] h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">

            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover"
                    src={`./vid/heroVideo.mp4`}
                    type="video/mp4"
                    autoPlay
                    muted
                    loop></video>
            </div>
            <div className="video-content space-y-2">
                <h1 className="text-6xl font-bold lg:text-8xl">Book4Me</h1>
                <h2 className=" text-4xl font-bold">Plan Your Holidays With Us</h2>
            </div>

            <div className="lg:absolute -bottom-5 z-10 bg-teal-700 rounded-lg shadow-lg p-10 w-[90%] mt-10">
                <div className="flex flex-col lg:flex-row justify-evenly gap-3">
                    <div className="flex flex-row justify-between items-center gap-2">
                        <label htmlFor="" className="">Check in Date:</label>
                        <input min={today}
                            type="date"
                            onChange={
                                (e) => {
                                    setCheckInDate(e.target.value)
                                }
                            }
                            className='border-none w-44 rounded-md outline-none p-1 text-black'
                            on
                            name=""
                            id=""/>
                    </div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <label htmlFor="" className="">Check out Date:</label>
                    <input type="date"
                        onChange={
                            (e) => {
                                setCheckOutDate(e.target.value)
                            }
                        }
                        min={today}
                        className='border-none w-44 rounded-md outline-none p-1 text-black'
                        name=""
                        id=""/>
                </div>
            <div className="flex flex-row justify-between items-center gap-2">
                <label htmlFor="" className="">City:</label>

                        <select onChange={(e) => {
                          setAddress(e.target.value)
                }} id="countries" class="  text-sm rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option  disabled>Choose a city</option>
                    <option selected value="Bhaktapur">Bhaktapue</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Pokhara">Pokhara</option>
                </select>
            </div>
            <div className="">
                <button onClick={handleSearch} className="bg-[#00388D] text-white w-full lg:w-32 p-2 rounded-lg">Search</button>
            </div>
        </div>

    </div>

</section>
    )
}

export default Hero
