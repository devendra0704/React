import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const [formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )

    const navigate= useNavigate();
    const [showPasswd,setshowPasswd]=useState(false);
    const [accountType, setAccountType] = useState("student");

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
        if(formData.password !==formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }
        setIsLoggedIn(true);
        const data={
            ...formData
        };
        console.log(data);

        toast.success('Account Created')
        navigate("/dashboard");
        
    }
    return (
        <div>
            {/* {student-isntructor tab} */}

            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
                <button onclick={() => setAccountType("student")} className={`${accountType === "student"? "bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all`}>
                    Student
                </button>
                <button onclick={() => setAccountType("instructor")} className={`${accountType === "instructor"? "bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandeler}>
                {/* firstname and last name */}
                <div className="flex gap-x-4">
                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">FirstName <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandeler}
                            placeholder="Firstname"
                            value={formData.firtname}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />

                    </label>

                    <label htmlFor="" className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">LastName <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandeler}
                            placeholder="Lastname"
                            value={formData.lastname}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />

                    </label>
                </div>

                <label htmlFor="" className="w-full">
                    {/* email add */}
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandeler}
                            placeholder="Enter Email Address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />

                </label>


                {/* enter passwd */}
                <div className="flex gap-x-4">
                    <label htmlFor="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showPasswd?("text"):("password")}
                            name="password"
                            onChange={changeHandeler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />


                        <span onClick={()=>setshowPasswd((prev)=>!prev)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10"
                        >
                            {showPasswd?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>

                    </label>


                    {/* confirm password */}
                    <label htmlFor="" className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showPasswd?("text"):("password")}
                            name="confirmPassword"
                            onChange={changeHandeler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        />


                        <span onClick={()=>setshowPasswd((prev)=>!prev)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10"
                        >
                            {showPasswd?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>

                    </label>
                </div>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                   Create Account 
                </button>

            </form>
        </div>
    );
}

export default SignupForm;