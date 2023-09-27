import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { roomType } from '../../../Data/data';
import BookingBox from './BookingBox';
import { id, it } from 'date-fns/locale';
const SingleAdertisementPage = () => {
    const [imageViewer, setImageViewer] = useState(false);
    const [advertisement, setAdvertisement] = useState([]);

    const [sellerId, setSellerId] = useState();
    const [productId, setProductId] = useState();

    const [extraCheck, setExtraCheck] = useState([]);
    const [propertyName, setPropertyName] = useState('');
    const [uploadedImage, setUploadedImage] = useState([]);
    const [propertyAddress, setPropertyAddress] = useState('');
    const [propertyDesc, setPropertyDesc] = useState('');
    const [roomNumber, setRoomNumbers] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [city, setCity] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomTypeSel, setRoomTypeSel] = useState('Premium');
    const [stayNumber, setStayNumber] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const [pricePerNight, setPricePerNight] = useState('');
    const [image, setStayImage] = useState('');

    const [userCheckinDate, setUserCheckinDate] = useState('');
    const [userCheckOutDate, setUserCheckoutDate] = useState('');
    const [curDate, setCurDate] = useState();
    const [userStayNumber, setUserStayNumber] = useState(0);

    const params = useParams();
    useEffect(() => {
        setCurDate(Date.now())
        const fetchData = async () => {
            const id = params.id;
            setProductId(id)
            const { data } = await axios.get(`/api/v1/Advertisement/${id}`);
        
            
            if (data.success) {
                setAdvertisement(data.fetchData);
                setSellerId(data.fetchData.owner);
                setPropertyName(data.fetchData.name);
                setPropertyDesc(data.fetchData.description);
                setPropertyAddress(data.fetchData.address);
                setRoomNumbers(data.fetchData.roomNumber);
                setRoomTypeSel(data.fetchData.roomType);
                setStayNumber(data.fetchData.maxPeople);
                setPricePerNight(data.fetchData.price);
                setExtraCheck(data.fetchData.extracheck);
                setUploadedImage(data.fetchData.images);
                setCheckInDate(data.fetchData.checkInDate);
                setCheckOutDate(data.fetchData.checkOutDate)
                setCity(data.fetchData.city)
            }
           
        }
        
        fetchData();
    }, []);



    
  return (
    <div className='w-full h-screen flex flex-col items-center'>
          {/* Show Image if imageViewer on */}
          {
              imageViewer ? (
                  <div className="relative h-screen z-10 flex flex-col items-center p-10 ">
                      <div className="cursor-pointer  absolute top-1 right-20">
                      <IoMdCloseCircleOutline className='text-purple-600 fixed w-16 h-16' onClick={() => {
                          setImageViewer(!imageViewer)
                      }}/>
                      </div>
                      
                      <div className="flex flex-col gap-10 w-2/3" >
                          {
                              uploadedImage.map((item,index) => {
                                  return (
                                    <img key={index} src={`http://localhost:8080/uploads/${item}`} className='max-h-[800px] w-full shadow-lg' alt="" /> 
                                  )
                              })
                          }
                      </div>
                  </div>
              ) : (
                <div className="flex overflow-auto no-scrollbar flex-col h-screen  p-10 bg-white items-center justify-center gap-15">
                    <div className="relative place-items-center grid justify-center items-center 
                    grid-cols-[4fr_3fr] 
                    lg:grid-cols-[2fr_1fr]  max-h-[500px] gap-2">
                        <div className="h-fit w-fit">
                        <img src={`http://localhost:8080/uploads/${uploadedImage[0]}`} className='h-[500px]' alt="" />
                        </div>
                        <div className="flex flex-col  gap-2 h-auto">
                            <img src={`http://localhost:8080/uploads/${uploadedImage[1]}`} className='h-[200px]' alt="" />
                            <img src={`http://localhost:8080/uploads/${uploadedImage[2]}`} className='h-[200px]' alt="" />
                        </div>
                
                                  
                                        <button className="absolute bg-purple-600 px-3 py-2 cursor-pointer text-white -bottom-5 -right-5" onClick={()=>{
                                            setImageViewer(!imageViewer)
                                          }}>Image Viewer </button>
                                      
        
                    </div>
               
                          <div className="mt-14">
                              <h1 className="text-4xl font-bold">{ propertyName }</h1>
                          </div>

                          <div className="mt-14">
                              <p className="text-xl">{ propertyDesc }</p>
                          </div>

                          <div className="flex flex-row justify-center gap-14 mt-5">

                              <div className="flex flex-col gap-2">
                                  <h2 className="text-lg font-bold">Extra Features</h2>
                                  <ol className='text-start'>
                                  {
                                      extraCheck.map((item) => {
                                          return (
                                            <li className='list-disc text-start'>{item }</li>
                                          )
                                          
                                      })
                                  }
                              </ol>
                              </div>
                              <div className="flex flex-col gap-2">
                                  <h2 className="text-lg font-bold">Price</h2>
                                  <h3 className="font-bold text-red-600 text-xl">NPR {pricePerNight} per night</h3>
                              </div>

                              <div className="flex flex-col gap-2">
                                  <h2 className="text-lg font-bold">Room Type</h2>
                                  <h3 className=" text-xl">{ roomTypeSel}</h3>
                              </div>
                              <div className="flex flex-col gap-2">
                                  <h2 className="text-lg font-bold">Room Number</h2>
                                  <h3 className=" text-xl">{ roomNumber} available rooms</h3>
                              </div>
                          </div>

                          
                          
                          <BookingBox sellerId={sellerId} productId={productId} price={pricePerNight} maxStay={stayNumber} place={params.id} roomAvailable={roomNumber} checkInDate={checkInDate } checkOutDate={checkOutDate} />
            </div> 
              )
        }
          


    </div>
  )
}

export default SingleAdertisementPage
