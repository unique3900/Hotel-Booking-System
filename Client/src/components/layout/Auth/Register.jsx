import axios from 'axios';
import React, {
    useState
} from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullname, setFullname] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!fullname || !email || !password || !phone) {
            console.log("Fill Every Field")
        }
        if (phone.length !== 10) {
            console.log("Invalid Phone Number")
        }
        console.log(phone, email, fullname, password);
        const { data } = await axios.post('/api/v1/register', {
            fullname,
            email,
            password,
            phone
        });
        if (data.success) {
            alert(data.message)
            navigate('/login');
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
                <form className="w-full flex flex-col gap-2"
                    onSubmit={handleSubmit}>
                    <div className="">
                        <h3 className="text-4xl text-center font-bold">Register</h3>
                    </div>
                    <div className="flex flex-col justify-start gap-2 w-full">
                        <label htmlFor="" className="text-lg text-gray-500">Full Name</label>
                        <input type="text"
                            value={fullname}
                            onChange={
                                (e) => {
                                    setFullname(e.target.value)
                                }
                            }
                            name=""
                            className='outline-double outline-[#00388D] border-black px-3 py-2'
                            id=""/>

                    </div>
                <div className="flex flex-col justify-start gap-2 w-full">
                    <label htmlFor="" className="text-lg text-gray-500">Email</label>
                    <input type="email"
                        value={email}
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                        name=""
                        className='outline-double outline-[#00388D] border-black px-3 py-2'
                        id=""/>

                </div>
            <div className="flex flex-col justify-start gap-2 w-full">
                <label htmlFor="" className="text-lg text-gray-500">Password</label>
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
            <label htmlFor="" className="text-lg text-gray-500">Phone</label>
            <input type="text"
                value={phone}
                onChange={
                    (e) => {
                        setPhone(e.target.value)
                    }
                }
                name=""
                className='outline-double outline-[#00388D] border-black px-3 py-2'
                id=""/>

        </div>

    <div className="flex flex-col justify-start gap-2 w-full">

        <input type="submit" value="Register" name="" className='outline-double bg-[#00388D] cursor-pointer text-white border-black px-3 py-2' id=""/>

    </div>


            </form>
            </div>
    
        </div></div>
    )
}

export default Register
