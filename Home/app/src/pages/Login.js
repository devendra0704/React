import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}){
    return (
        <Template
        title="Welcome Back"
        desc1="Buils skills for today ,tomorrow, and beyond."
        desc2="Education to future your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Login;