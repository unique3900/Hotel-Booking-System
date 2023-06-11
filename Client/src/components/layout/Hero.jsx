import React from 'react'
import './Hero.css'
import Select from 'react-select';
import { colourOptions } from '../../Data/data';
const Hero = () => {
    return (
        <section className="relative lg:h-[75%] h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
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
                        <label htmlFor="" className="">Book From:</label>
                        <input type="date" className='border-none w-44 rounded-md outline-none p-1 text-black' name="" id=""/>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <label htmlFor="" className="">Book To:</label>
                        <input type="date" className='border-none w-44 rounded-md outline-none p-1 text-black' name="" id=""/>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <label htmlFor="" className="">City:</label>

                        <Select className='text-black w-44'
                        defaultValue={colourOptions[1]}
                        options={colourOptions}
                        />
                    </div>
                    <div className="">
                        <button className="bg-[#00388D] text-white w-full lg:w-32 p-2 rounded-lg">Search</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
