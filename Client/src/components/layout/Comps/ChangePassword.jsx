import axios from 'axios';
import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const navigate = useNavigate();
    const { setUser, user } = useContext(UserContext);
    
    const {email} = useParams();

    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!email || !password ) {
            console.log("Fill Every Field")
        }
        if (password !== newpassword) {
            alert("Password Doesnot Match")
        }
        const { data } = await axios.post('/api/v1/change-password', {
            email,
            oldPassword,
            password
        });
        console.log(data)
        if (data.success) {
            alert(data.message);
            navigate('/');
        }
        else {
            alert(data.message)
        }
    }
  return (
    <div className='h-screen flex items-center justify-center bg-teal-500 bg-opacity-60 px-10'>
    <div className="flex w-full lg:flex-row justify-center lg:justify-between bg-white shadow-lg py-5  h-auto p-2">
        {/* left */}
        <div className="hidden w-full lg:flex items-center ">
            <img src="https://cdn.pixabay.com/photo/2021/02/19/23/17/reception-6031806_1280.png" className='h-auto rounded-2xl shadow-lg w-full' alt=""/>
        </div>
        {/* Right */}

  <div className="flex flex-col w-full items-center gap-5 py-10 px-5">
        <form className=" w-full flex flex-col gap-2"
            onSubmit={handleSubmit}>
            <div className="">
                <h3 className="text-4xl text-center font-bold">Change Password</h3>
            </div>

        <div className="flex flex-col justify-start gap-2 w-full">
            <label htmlFor="" className="text-lg text-gray-500">Old Password</label>
            <input type="password"
                value={oldPassword}
                onChange={
                    (e) => {
                        setOldPassword(e.target.value)
                    }
                }
                name=""
                className='outline-double outline-[#00388D] border-black px-3 py-2'
                id=""/>

        </div>
    <div className="flex flex-col justify-start gap-2 w-full">
        <label htmlFor="" className="text-lg text-gray-500">New Password</label>
        <input type="password"
            value={password}
            onChange={
                (e) => {
                    setPassword(e.target.value)
                }
            }
            name=""
            className='outline-double outline-[#00388D] border-black px-3 py-2'
            id=""/>

    </div>
    <div className="flex flex-col justify-start gap-2 w-full">
        <label htmlFor="" className="text-lg text-gray-500">Confirm New Password</label>
        <input type="password"
            value={newpassword}
            onChange={
                (e) => {
                    setNewPassword(e.target.value)
                }
            }
            name=""
            className='outline-double outline-[#00388D] border-black px-3 py-2'
            id=""/>

    </div>


<div className="flex flex-col justify-start gap-2 w-full">

<input type="submit" value={"Change Password"} name="" className='outline-double bg-[#00388D] cursor-pointer text-white border-black px-3 py-2' id=""/>

</div>

    </form>
    </div>

</div></div>
  )
}

export default ChangePassword
