import React,{useState} from "react";
import data from "./data";
import {COLORS} from './colors'
import './media.scss'


const MediaLoad=()=>{
    const[noImg, setnoImg]=useState(3)
    const[active, setActive]=useState(null)
    const loadMore=()=>{
        setnoImg(noImg + noImg)
    }

    const slice=data.cardData.slice(0,noImg)
    return(
        <section className="">
            <div className="grid_media" >
                {slice.map((item, index, idx)=>{
                    return(
                           <div style={{width:365, height:420, borderRadius: 13, backgroundColor:active === item ? COLORS.GREEN : COLORS.BLACK}}>

                            <div underlayColor={COLORS.GREEN} onClick={() => setActive(item)}>
                            <img className="img_media" src={item.img} alt=""  />
                            
                            </div>
                        </div>

                        
                    )
                })}
                <button onClick={()=>loadMore()} className="btn_load">Load More</button>
            </div>
            
        </section>
    )
}

export default MediaLoad