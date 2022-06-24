import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import MediaLoad from "../media/media";

const List=()=>{
    return(
        <div>
  <Dropdown className="d-inline mx-2" id='mx-2' autoClose={false}>
    <Dropdown.Toggle id="dropdown-autoclose-false">
      Show All
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item>Branding</Dropdown.Item>
      <Dropdown.Item href="#">Desing</Dropdown.Item>
      <Dropdown.Item href="#">Illustration</Dropdown.Item>
      <Dropdown.Item href="#">Motion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        </div>
    )
}

export default List
