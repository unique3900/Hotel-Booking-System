import React from 'react'

const HomepageListing = () => {
    return (
        <div className='w-full h-screen flex flex-col p-10 gap-5'>
            <div className="">
                <h3 className="text-4xl text-black font-bold text-center
                                  ">Latest Destination</h3>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row justify-evenly flex-wrap">

            
                <div className= "relative bg-white shadow-lg flex flex-col gap-2 p-5 place-items-center w-1/4">
                    <div className="w-full">
                        <img src="https://cdn.ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg" className=' object-cover w-full h-72' alt="" />
                        
                    </div>
                    <div className="absolute  left-2 top-1 shadow-2xl  bg-red-500 px-4 py-2 rounded-full text-white">Rs 5000</div>
                
                    <div className="">
                        <h4 className="text-2xl font-bold ">Maldives Beach Resort 5 star standard</h4>
                    </div>
                    <div className="flex flex-row justify-between gap-8">
                        <p className="">Premium Room</p>
                        <p className="">Maldives beach 04</p>
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, provident necessitatibus commodi non accusamus id, odio, eveniet sunt deleniti libero facilis omnis nobis eius nulla accusantium error ipsam cupiditate nemo!
                    </div>
                    <div className="flex flex-row justify-between gap-10">
                        <button className="bg-[#00388D]  px-3 py-2 text-white cursor-pointer">View More</button>
                        <button className="bg-[#1b6714]  px-3 py-2 text-white cursor-pointer">Book This</button>
                    </div>
                    


                </div>
            
        
       

             

            </div>

        </div>
    )
}

export default HomepageListing
