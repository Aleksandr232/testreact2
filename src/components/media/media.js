import React,{useState, useEffect} from "react";
import data from "./data";
import {COLORS} from './colors'
import './media.scss'


const MediaLoad=()=>{
    const[Img, setImg]=useState(9)
    const[active, setActive]=useState(null)

    

    
    
    const loadMore=()=>{
        setImg((prevValue)=>prevValue + 9)
    }
   /*  const slice=data.cardData.slice(0,Img) */
    return(
        <section className="media">
            <div className="grid_media" >
                {data.cardData.slice(0, Img).map((item)=>{
                    return(
                           <div style={{width:365, height:420, borderRadius: 13, backgroundColor:active === item ? COLORS.GREEN : COLORS.BLACK}}>

                            <div underlayColor={COLORS.GREEN} onClick={() => setActive(item)}>
                                <img className="img_media" src={item.img} alt=""  />
                                    <div className="title_btn">{item.title_btn}</div>
                                    <div className="title">{item.title}</div>
                            
                            </div>
                            
                        </div>

                        
                    )
                    
                })}
                <button onClick={loadMore} className="btn_load">Load More</button>
            </div>
            
        </section>
    )
}

export default MediaLoad