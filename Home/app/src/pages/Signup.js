import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}){
    return (
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Buils skills for today ,tomorrow, and beyond."
        desc2="Education to future your career."
        image={signupImg}
        formtype="Signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Signup;