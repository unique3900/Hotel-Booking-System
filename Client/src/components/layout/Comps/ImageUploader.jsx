import React from 'react';
import {
    AiOutlineCloudUpload
} from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
const ImageUploader = ({ imageLink,onChange, imageLinkSetter, handleUrlUpload, addedImages, localImageAdder }) => {
    const handledeleteImage = (filename) => {
        onChange([...addedImages.filter(prev => prev!==filename)])
    }
  return (
      <>
            <label htmlFor="" className="text-lg text-gray-500">Upload Photos</label>
                            <div className="flex flex-row gap-2 w-full">
                                <input value={imageLink}
                                    type="url"
                                    name=""
                                    id=""
                                    placeholder='Upload via URL '
                                    className='outline-double outline-[#00388D] border-black px-3 py-2 w-full'
                                    onChange={
                                        (e) => {
                                            imageLinkSetter(e.target.value)
                                        }
                                    } />
                                <button className="p-2 rounded-lg bg-purple-600 text-white cursor-pointer flex-nowrap"
                                    onClick={handleUrlUpload}>Add Photo</button>

                            </div>
                            <div className="flex flex-row gap-4 flex-wrap">

                                {
                                    addedImages.length > 0 && addedImages.map((item, index) => (
                                        <div className="relative w-36 h-36 "
                                            key={index}>
                                            <img src={
                                                'http://localhost:8080/uploads/' + item
                                            }
                                                alt="" className='w-full h-full' />
                                            
                                            <RiDeleteBin6Line className='absolute scale-150 font-bold bg-white bg-opacity-75  bottom-1 right-1 cursor-pointer' onClick={()=>{
                                                handledeleteImage(item)
                                            }}/>
                                        </div>
                                    ))
                                } </div>

                            <div className="">
                                <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                                    <input type="file" multiple accept="image/*" onChange={localImageAdder} className="hidden" />
                                    <AiOutlineCloudUpload />
                                    Upload from Device
                                </label>
                            </div>
      
      </>
  )
}

export default ImageUploader
