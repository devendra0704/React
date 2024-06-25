import { useState } from "react";

const Card= ({id,image,info,price,name,removeTour})=>{
    const [readmore,setReadmore]=useState(false);
    const description= readmore?info:`${info.substring(0,200)}....`;
    

    function removeHandeler(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tourInfo">
                <div className="tourDetail">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="readMore" onClick={removeHandeler}>
                        {readmore? `...show less`:`read more`}
                    </span>
                </div>
            </div>
            <button className="btnRed" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Card;