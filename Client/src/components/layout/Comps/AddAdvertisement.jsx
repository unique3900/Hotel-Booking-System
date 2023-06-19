import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import  Select  from 'react-select';
import {
    colourOptions,
    roomType
} from '../../../Data/data';
import {
    UserContext
} from '../../Context/UserContext';

import {
    useNavigate, useParams
} from 'react-router-dom';
import axios from 'axios';


import AdExtraFeature from './AdExtraFeature';
import ImageUploader from './ImageUploader';


const AddAdvertisement = () => {
    const params = useParams();
    const {
        user,
        loading,setLoading
    } = useContext(UserContext);
    const navigate = useNavigate();
    
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

    useEffect(() => {
        if (!params.id) {
            return;
            
        }
        
        const fetchData = async () => {
            const { data } = await axios.get(`/api/v1/Advertisement/${params.id}`);
            if (data.success) {
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
                
                console.log(data)
            }
            else {
                console.log("error in fetch Data")
            }
        }
        fetchData();

        
    }, [])


    const addPhotoViaUrl = async (e) => {
        e.preventDefault();
        const {
            data
        } = await axios.post('/api/v1/upload-ad-img', {
            imageURL
        })
        // setLoading(false);
        setUploadedImage((prev) => {
            return [
                ...prev,
                data.op
            ]
        });
        console.log(uploadedImage)
    }
    

    const uploadLocalImage = async (e) => {
        e.preventDefault()
        const localfiles = e.target.files;
        const data = new FormData();
        //Sending photos as formdata element
        for (let i = 0; i < localfiles.length; i++) {
            data.append('photos', localfiles[i]);
        }
        
       await axios.post('/api/v1/upload', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
       }).then(response => {
           const { data: filename } = response;
           console.log(filename);
        //    setLoading(false);
           setUploadedImage((prev) => {
                return [...prev,...filename.op]
            })
       })
       
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log([extraCheck]);
        console.log(uploadedImage)
        const datas = { propertyName, propertyDesc, propertyAddress, checkInDate, checkOutDate, uploadedImage, roomTypeSel,extraCheck, pricePerNight, stayNumber, roomNumber,city };
        
        if (!params.id) {
            const { data } = await axios.post('/add-new-advertisement',datas)
            console.log(data)
        }
        else {
            const {data}=await axios.put(`/api/v1/update-advertisement`,{id:params.id,...datas})
            console.log(data)
        }

    }


    return (
        <div className='h-screen flex items-center place-items-center justify-center bg-teal-200 bg-opacity-60 px-10'>
            <div className="flex mt-5  h-full overflow-x-auto no-scrollbar w-full lg:flex-row justify-center lg:justify-between bg-white shadow-lg py-5   p-2">
                {/* left */}
                <div className="hidden w-full lg:flex items-center ">
                    <img src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg" className='h-auto rounded-2xl shadow-lg w-full' alt="" />
                </div>
                {/* Right */}

                <div className="flex flex-col w-full items-center gap-5 py-10 px-5">
                    <h3 className="text-4xl font-bold">{params.id?"Update":"Add"} Advertisement</h3>
                    <form className="w-full flex flex-col gap-2" action="" method="post"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-start gap-2 w-full">
                            <label htmlFor="" className="text-lg text-gray-500">Property Name</label>
                            <input type="text"
                                value={propertyName}
                                onChange={
                                    (e) => {
                                        setPropertyName(e.target.value)
                                    }
                                }
                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>
                        <div className="flex flex-col justify-start gap-2 w-full">
                            <label htmlFor="" className="text-lg text-gray-500">City</label>
                            <Select className='text-black w-full'
                        defaultValue={colourOptions[0]}
                                options={colourOptions}
                                onChange={(e) => {
                                    setCity(e.value)
                                    

                                }}
                        />
                            
                        </div>
                        <div className="flex flex-col justify-start gap-2 w-full">
                            <label htmlFor="" className="text-lg text-gray-500">Full Address</label>
                            <input type="text"
                                value={propertyAddress}
                                onChange={
                                    (e) => {
                                        setPropertyAddress(e.target.value)
                                    }
                                }
                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>


                        <div className="flex flex-col justify-start gap-2 w-full">
                            <label htmlFor="" className="text-lg text-gray-500">Property Description</label>
                            <textarea type="text"
                                value={propertyDesc}
                                onChange={
                                    (e) => {
                                        setPropertyDesc(e.target.value)
                                    }
                                }
                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>
                        <div className="flex flex-col justify-start gap-2 w-full">
                            <label htmlFor="" className="text-lg text-gray-500">Number of Rooms</label>
                            <input type="number"
                                value={roomNumber}
                                onChange={
                                    (e) => {
                                        setRoomNumbers(e.target.value)
                                    }
                                }

                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>
                        <div className="flex flex-col justify-start gap-2 w-full ">
                            <label htmlFor="" className="text-lg text-gray-500">Type of Room</label>
                            <select value={roomTypeSel} onChange={
                                (e) => {
                                    setRoomTypeSel(e.target.value)
                                }
                            }
                                className="outline-double outline-[#00388D] border-black px-3 py-2">
                                {
                                    roomType.map((item, index) => {
                                        return (
                                            <option key={index}
                                               
                                                value={
                                                    `${item.label
                                                    }`
                                                }>
                                                {
                                                    item.label
                                                }</option>
                                        )
                                    })
                                } </select>

                        </div>
                        <div className="flex flex-col justify-start  w-full gap-2">
                            <label htmlFor="" className="text-lg text-gray-500">How Many Can Stay?</label>
                            <input type="number"
                                value={stayNumber}
                                onChange={
                                    (e) => {
                                        setStayNumber(e.target.value)
                                    }
                                }
                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>
                        <div className="flex flex-col justify-start  w-full gap-2">
                            <label htmlFor="" className="text-lg text-gray-500">Price Per Night <span className="italic text-sm">In Nrs</span></label>
                            <input type="number"
                                value={pricePerNight}
                                onChange={
                                    (e) => {
                                        setPricePerNight(e.target.value)
                                    }
                                }
                                name=""
                                className='outline-double outline-[#00388D] border-black px-3 py-2'
                                id="" />

                        </div>
                        

                        <div className="flex lg:flex-col justify-start gap-2 w-full ">
                            
                            <AdExtraFeature selected={extraCheck} onChange={setExtraCheck} />

                        </div>
                        <div className="flex flex-col justify-start  w-full gap-2">
                            <ImageUploader imageLink={imageURL} imageLinkSetter={setImageUrl} handleUrlUpload={addPhotoViaUrl} addedImages={uploadedImage } localImageAdder={uploadLocalImage}  />


                        </div>
                   
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-2">
                            <div className="flex w-full  flex-col gap-2">
                                <label htmlFor="" className="text-lg text-gray-500">Check In Date</label>
                                <input type="date" value={checkInDate} onChange={(e) => {
                                    setCheckInDate(e.target.value)
                                }} className=' outline-double w-full px-2 py-2' name="" id=""  />
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <label htmlFor="" className="text-lg text-gray-500">Check out Date</label>
                                <input value={checkOutDate} onChange={(e) => {
                                    setCheckOutDate(e.target.value)
                                }} type="date" className=' outline-double w-full px-2 py-2' name="" id=""  />
                                </div>
                        </div>
                        
                        <input type="submit" name="" className='outline-double bg-[#00388D] cursor-pointer text-white border-black px-3 py-2' id="" />
                    </form>


                    
                </div>
            </div>
        </div>
    )

}
export default AddAdvertisement
