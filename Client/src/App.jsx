import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'

const App = () => {
    return (
        <div>
            <div className="h-screen w-full ">

                <Navbar />
                <Hero/>
            </div>
        </div>
    )
}

export default App
