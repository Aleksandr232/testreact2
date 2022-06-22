import React from "react";
import Tabs from 'react-bootstrap/Tabs'
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
    
  </Tab>
  <Tab eventKey="profile" title="Design">
    
  </Tab>
  <Tab eventKey="contact" title="Branding" >
    
  </Tab>
  <Tab eventKey="lil" title="Illustration" >
    
    </Tab>
    <Tab eventKey="motion" title="Motion" >
    
    </Tab>
</Tabs>
        </div>
    )
}

export default Tab