import React,{useState, useEffect} from "react";
import data from "./data";
import {COLORS} from './colors'
import './media.scss'


const MediaLoad=(props)=>{
    const[Img, setImg]=useState(9)
    const[active, setActive]=useState(null)
    const[tempSrc, settempSrc]=useState('')
    const[model, setModel]=useState(false)
   
    
    
    
    const getImg=(id)=>{
        settempSrc(id)
        setModel(true)
    }
    

    
    
    const loadMore=()=>{
        setImg((prevValue)=>prevValue + 9)
    }
   /*  const slice=data.cardData.slice(0,Img) */
    return(
        <section className="media">
            <div className="grid_media" id='grid_media' >
                {data.cardData.slice(0, Img).map((item)=>{
                    return(
                           <div style={{width:365, height:448, borderRadius: 13, backgroundColor:active === item ? COLORS.GREEN : COLORS.BLACK}}>

                            <div underlayColor={COLORS.GREEN} onClick={() => setActive(item)}>
                                <div className={model? 'model open' : model}>
                                    <img src={tempSrc} alt="" />
                                </div>
                                <img className="img_media" id='img_media' src={item.img} alt=""  />
                                    <div className="title_btn" onClick={()=>getImg(item.img)}>{item.title_btn}</div>
                                    <div className="title">{item.title}</div>
                            
                            </div>
                            
                        </div>

                        
                    )
                    
                })}
                <button onClick={loadMore} className="btn_load" id='btn_load'>Load More</button>
            </div>
            
        </section>
    )
}

export default MediaLoad