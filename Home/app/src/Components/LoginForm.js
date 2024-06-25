import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"

function LoginForm ({setIsLoggedIn}){

    const navigate=useNavigate();
    const [showPasswd,setshowPasswd]=useState(false);

    const [FormData,setFormData]=useState({
        email:"",
        passwd:""
    });

    function changeHandeler(event){
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
    })
    }

    function submitHandeler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("Login Successfully")

    }
    return (
        <form className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submitHandeler}>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                    <input
                        required
                        type="email"
                        value={FormData.email}
                        onChange={changeHandeler}
                        placeholder="Enter email address"
                        name="email"
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
                </p>
            </label>

            <label className="w-full relative">
                <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup  className="text-pink-200">*</sup>
                    <input
                        required
                        type={showPasswd?("text"):("password")}
                        value={FormData.passwd}
                        onChange={changeHandeler}
                        placeholder="Enter Password"
                        name="passwd"
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
                </p>

                <span onClick={()=>setshowPasswd((prev)=>!prev)} 
                className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPasswd?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                </p>
                </Link>
            </label>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                Sign In
            </button>


        </form>
    );
}


export default LoginForm;