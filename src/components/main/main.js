import React from "react";
import Tab from "../tabs/tabs";
import List from "../list/list";
import './main.scss'

const Main=()=>{
    return(
        <section className="main" id='main'>
           <Tab/>
           <List/>
        </section>
    )
}

export default Main