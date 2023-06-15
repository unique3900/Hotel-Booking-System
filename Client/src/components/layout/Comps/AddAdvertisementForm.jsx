import React from 'react'

const AddAdvertisementForm = () => {
  return (
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
<label htmlFor="" className="text-lg text-gray-500">Property Address</label>
<input type="text"
    value={propertyAddress}
    onChange={
        (e) => {
            setPropertyAddress(e.target.value)
        }
    }
    name=""
    className='outline-double outline-[#00388D] border-black px-3 py-2'
    id=""/>

</div>

<div className="flex flex-col justify-start gap-2 w-full">
<label htmlFor="" className="text-lg text-gray-500">Property Phone</label>
<input type="text"
value={propertyPhone}
onChange={
    (e) => {
        setPropertyPhone(e.target.value)
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
<input value={imageURL}
type="url"
name=""
id=""
placeholder='Upload via URL '
className='outline-double outline-[#00388D] border-black px-3 py-2 w-full'
onChange={
(e) => {
setImageUrl(e.target.value)
}
}/>
<button className="p-2 rounded-lg bg-purple-600 text-white cursor-pointer flex-nowrap"
onClick={addPhotoViaUrl}>Add Photo</button>

</div>
<div className="flex flex-row gap-2 flex-wrap">

{
uploadedImage.length > 0 && uploadedImage.map((item, index) => (
<div className="w-36 h-36 "
key={index}>
<img src={
'http://localhost:8080/uploads/' + item
}
alt=""/>
</div>
))
} </div>

<div className="">
<label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
<input type="file" multiple accept="image/*" className="hidden"/>
<AiOutlineCloudUpload/>
Upload
</label>
</div>


</div><input type="submit" name="" className='outline-double bg-[#00388D] cursor-pointer text-white border-black px-3 py-2' id="" />
</form>
  )
}

export default AddAdvertisementForm
