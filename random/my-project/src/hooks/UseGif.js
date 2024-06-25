import {useEffect, useState } from "react";
import axios from "axios";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function UseGif(tag){
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);

    async function fetchData(tag){

        try{
            setLoading(true);
            const {data}= await axios.get(tag?`${Url}&tag=${tag}` : Url);
            const image=data.data.images.downsized_large.url;
            setGif(image);
            setLoading(false);
        }
        catch (error) {
            console.error("Error fetching the GIF:", error);
        }
    }

    useEffect(()=>{
        fetchData('car');
    },[])

    return {gif,loading,fetchData}
       
}

export default UseGif;