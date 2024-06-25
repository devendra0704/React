import {React,useEffect, useState } from "react";
import Spinner from "./Spinner"
import UseGif from "../hooks/UseGif"

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){

    const [tag,setTag]=useState('car');
    // const [gif,setGif]=useState('');
    // const [loading,setLoading]=useState(false);

    // async function fetchData(){

    //     try{
    //         setLoading(true);
    //         const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //         const {data}= await axios.get(url);
    //         const image=data.data.images.downsized_large.url;
    //         setGif(image);
    //         setLoading(false);
    //     }
    //     catch (error) {
    //         console.error("Error fetching the GIF:", error);
    //     }

    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])


    const {gif,loading,fetchData} =UseGif(tag);
    return (
        <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>

            
            {
                loading? (<Spinner/>) : (<img src={gif}  alt="" width="450"/>) 
            }

            <input
            className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px] text-center"
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            />

            <button  onClick={()=>fetchData(tag)}
            className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
            >
                Generate
            </button>
        </div>
    );
}

export default Tag;