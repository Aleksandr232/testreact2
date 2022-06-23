import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import MediaLoad from "../media/media";
import './tab.scss'


const Tab=()=>{
    return(
        <div className="tab">
        <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Show All">
    <MediaLoad/>
  </Tab>
  <Tab eventKey="profile" title="Design">
  <MediaLoad/>
  </Tab>
  <Tab eventKey="contact" title="Branding" >
  <MediaLoad/>
  </Tab>
  <Tab eventKey="lil" title="Illustration" >
  <MediaLoad/>
    </Tab>
    <Tab eventKey="motion" title="Motion" >
    
    </Tab>
</Tabs>
        </div>
    )
}

export default Tab