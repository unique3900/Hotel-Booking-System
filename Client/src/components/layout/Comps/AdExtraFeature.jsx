import React from 'react'

const AdExtraFeature = ({ onChange, selected }) => {
    const handleCheck = (e) => {
        const checkedVal = e.target.value;
        const checkedStat = e.target.checked;
    
        if (checkedStat) {
            onChange([
                ...selected,
                checkedVal
            ]);
            
        } else {
            onChange(selected.filter((e) => {
                e !== checkedVal
            }))
        }
    }
  return (
      <>
      <label htmlFor="" className="text-lg text-gray-500">What you Offer?</label>
                            <div className="flex flex-col lg:flex-row justify-between ">
                                <div className="flex flex-row justify-between gap-2">
                                    <label htmlFor="" className="text-md text-gray-500 ">Smoking</label>
                                    <input type="checkbox" value='smoking'
                                        onChange={handleCheck}
                                        name=""
                                        id="" />
                                </div>
                                <div className="flex flex-row justify-between gap-2">
                                    <label htmlFor="" className="text-md text-gray-500 ">Swimming Pool</label>
                                    <input type="checkbox" value='swimming pool'
                                        onChange={handleCheck}
                                        name=""
                                        id="" />
                                </div>
                                <div className="flex flex-row justify-between gap-2">
                                    <label htmlFor="" className="text-md text-gray-500 ">Breakfast</label>
                                    <input type="checkbox" value='breakfast'
                                        onChange={handleCheck}
                                        name=""
                                        id="" />
                                </div>
                                <div className="flex flex-row justify-between gap-2">
                                    <label htmlFor="" className="text-md text-gray-500">Dinner</label>
                                    <input type="checkbox" value='dinner'
                                        onChange={handleCheck}
                                        name=""
                                        id="" />
                                </div>
                                <div className="flex flex-row justify-between gap-2">
                                    <label htmlFor="" className="text-md text-gray-500">Lunch</label>
                                    <input type="checkbox" value='lunch'
                                        onChange={handleCheck}
                                        name=""
                                        id="" />
                                </div>

                            </div>
      </>
  )
}

export default AdExtraFeature
