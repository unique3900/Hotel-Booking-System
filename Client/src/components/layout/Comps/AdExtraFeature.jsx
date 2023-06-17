import React from 'react'

const AdExtraFeature = ({
    onChange,
    selected
}) => {


    const handleCheck = (e) => {

        const {
            checked,
            name
        } = e.target;
        if (checked) {
            onChange([
                ...selected,
                name
            ]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }
    return (
        <>
            <label htmlFor="" className="text-lg text-gray-500">What you Offer?</label>
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Smoking</label>
                    <input type="checkbox" value='smoking'
                        checked={selected.includes('smoking')}
                        onChange={handleCheck}
                        name="smoking"
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Swimming Pool</label>
                    <input type="checkbox" value='swimming pool'
                        checked={selected.includes('swimming')}
                        onChange={handleCheck}
                        name="swimming"
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500 ">Breakfast</label>
                    <input type="checkbox" value='breakfast'
                        checked={selected.includes('breakfast')}
                        onChange={handleCheck}
                        name="breakfast"
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500">Dinner</label>
                    <input type="checkbox" value='dinner'
                        checked={selected.includes('dinner')}
                        onChange={handleCheck}
                        name="dinner"
                        id=""/>
                </div>
                <div className="flex flex-row justify-between gap-2">
                    <label htmlFor="" className="text-md text-gray-500">Lunch</label>
                    <input type="checkbox" value='lunch'
                        checked={selected.includes('lunch')}
                        onChange={handleCheck}
                        name="lunch"
                        id=""/>
                </div>

            </div>
        </>
    )
}

export default AdExtraFeature
