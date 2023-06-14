import React, {
    useState
} from 'react'
import Select from 'react-select';
import {
    roomType
} from '../../../Data/data';
const AddAdvertisement = () => {
    const [extraCheck, setExtraCheck] = useState([]);
    const [propertyName, setPropertyName] = useState('');
    const [propertyDesc, setPropertyDesc] = useState('');
    const [roomNumbers, setRoomNumbers] = useState('');
    const [roomTypeSel, setRoomTypeSel] = useState('');
    const [stayNumber, setStayNumber] = useState('');
    const [image, setStayImage] = useState('');

    const handleCheck = (e) => {
        const checkedVal = e.target.value;
        const checkedStat = e.target.checked;

        if (checkedStat) {
            setExtraCheck([
                ...extraCheck,
                checkedVal
            ]);
        } else {
            setExtraCheck(extraCheck.filter((e) => {
                e !== checkedVal
            }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(extraCheck);

        console.log(propertyName, roomNumbers, roomTypeSel, stayNumber, image);
    }
    return (
        <div className='h-screen flex items-center place-items-center justify-center bg-teal-200 bg-opacity-60 px-10'>
            <div className="flex mt-5  h-full overflow-x-auto no-scrollbar w-full lg:flex-row justify-center lg:justify-between bg-white shadow-lg py-5   p-2">
                {/* left */}
                <div className="hidden w-full lg:flex items-center ">
                    <img src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg" className='h-auto rounded-2xl shadow-lg w-full' alt=""/>
                </div>
                {/* Right */}

                <div className="flex flex-col w-full items-center gap-5 py-10 px-5">
                    <h3 className="text-4xl font-bold">Add Advertisement</h3>
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
                                id=""/>

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
                            id=""/>

                    </div>
                <div className="flex flex-col justify-start gap-2 w-full">
                    <label htmlFor="" className="text-lg text-gray-500">Number of Rooms</label>
                    <input type="number"
                        value={roomNumbers}
                        onChange={
                            (e) => {
                                setRoomNumbers(e.target.value)
                            }
                        }

                        name=""
                        className='outline-double outline-[#00388D] border-black px-3 py-2'
                        id=""/>

                </div>
            <div className="flex flex-col justify-start gap-2 w-full ">
                <label htmlFor="" className="text-lg text-gray-500">Type of Room</label>
                <select onChange={
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
                                    `${
                                        item.label
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
                    id=""/>

            </div>

        <div className="flex lg:flex-col justify-start gap-2 w-full ">
            <label htmlFor="" className="text-lg text-gray-500">What you Offer?</label>
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Smoking</label>
                    <input type="checkbox" value='smoking'
                        onChange={handleCheck}
                        name=""
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Swimming Pool</label>
                    <input type="checkbox" value='swimming pool'
                        onChange={handleCheck}
                        name=""
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Breakfast</label>
                    <input type="checkbox" value='breakfast'
                        onChange={handleCheck}
                        name=""
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500">Dinner</label>
                    <input type="checkbox" value='dinner'
                        onChange={handleCheck}
                        name=""
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500">Lunch</label>
                    <input type="checkbox" value='lunch'
                        onChange={handleCheck}
                        name=""
                        id=""/>
                </div>

            </div>


        </div>
        <div className="flex flex-col justify-start  w-full gap-2">
            <label htmlFor="" className="text-lg text-gray-500">Upload Photos</label>
            <div className="flex flex-row gap-2 w-full">
                <input type="url" name="" id="" placeholder='Upload via URL ' className='outline-double outline-[#00388D] border-black px-3 py-2 w-full'/>
                <button className="p-2 rounded-lg bg-purple-600 text-white cursor-pointer flex-nowrap">Add Photo</button>
            </div>

            <input type="file" accept='image/*'
                onChange={
                    (e) => {
                        setStayImage(e.target.files)
                    }
                }

                name=""
                className='outline-double outline-[#00388D] border-black px-3 py-2'
                id=""/>

        </div>
    <input type="submit" name="" className='outline-double bg-[#00388D] cursor-pointer text-white border-black px-3 py-2' id=""/>
</form></div></div></div>
    )
}

export default AddAdvertisement
