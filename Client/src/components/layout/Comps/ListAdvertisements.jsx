import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react'
import { productData } from '../../../Data/data';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/UserContext';

const ListAdvertisements = () => {
  const [advertData, setadvertData] = useState([]);

  const {fetchedProducts,setFetchedProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    try {
      
      const { data } = await axios.post('/my-advertisements');
      if (data.success) {
        setadvertData(data.fetchData);
        setFetchedProducts(data.fetchData)
        
      }
      else {
        console.log("No data Availabl");
      
      }
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
        try {
          const { data } = await axios.delete(`/api/v1/delete/${id}`);
          console.log(data)
        } catch (error) {
          console.log(error)
        }
  }
  
  return (
    <div className='h-full w-full overflow-y-scroll no-scrollbar gap-2  flex flex-col '>
      <h3 className="text-3xl font-bold text-center">Your Advertisements</h3>
      {
        fetchedProducts.map((item) => {
          return (
            
            <div key={item._id} className="flex w-full shadow-lg flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="relative w-72 h-48">
                <img src={`http://localhost:8080/uploads/${item.images[0]}`} alt="" className=' w-72 h-44' />
                <p className="bg-red-700 absolute right-3 top-2 px-2 rounded-full text-white">NPR {item.price } /-</p>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-3 py-3 px-2">
                <div className="">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-600 italic underline">{item.address }</p>
                  </div>
                  
                  
                  <div className="">
                    <p className="text-md">{item.description }</p>
                  </div>
                  <div className="">
                    <h4 className="text md italic text-gray-500">{ item.roomType} Room</h4>
                  </div>
                  <div className="flex flex-row justify-between mt-3">
                    <Link to={`advertisement/${item._id}`} className="bg-green-600 px-3 py-2 text-white rounded-xl">Update</Link>
                    <button onClick={() => {
                      handleDelete(item._id)
                    }} className="bg-red-600 px-3 py-2 text-white rounded-xl">Delete</button>
                  </div>
                </div>


              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default ListAdvertisements
