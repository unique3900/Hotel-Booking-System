import React from 'react'
import Hero from './Hero'
import ListAdvertisements from './ListAdvertisements'
import HomepageListing from './HomepageListing'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-16'>
          <Hero />
          <HomepageListing/>
    </div>
  )
}

export default Homepage
