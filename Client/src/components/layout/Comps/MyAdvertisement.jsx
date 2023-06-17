import React from 'react'
import { useNavigate } from 'react-router-dom'
import ListAdvertisements from './ListAdvertisements';

const MyAdvertisement = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col place-items-center gap-5 w-[100%]'>
      <div className="title">
        <h1 className="text-5xl font-bold">Advertisement</h1>
      </div>
      <div className="w-fit">
        <button className="bg-green-700 px-5 py-2 rounded-full w-fit text-white" onClick={() => {
          navigate('/add-advertisement')
        }}>Add New Advertisement</button>
      </div>

      {/* List Advertisements */}
      <ListAdvertisements/>

    </div>
  )
}

export default MyAdvertisement
