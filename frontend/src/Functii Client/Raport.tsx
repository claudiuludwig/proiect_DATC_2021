import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Raport() {
    const [showRaport, setShowRaport] = useState(false);
    const [showVerify, setShowVerify] = useState(false);
  
    return (
      <>
        <DropdownButton id="dropdown-basic-button" title="Ce dorești să faci?">
        <Dropdown.Item onClick={()=> {setShowRaport(true); setShowVerify(false);}}>Să raportez ceva</Dropdown.Item>
        <Dropdown.Item onClick={()=> {setShowRaport(false); setShowVerify(true);}}>Să îmi verific contul</Dropdown.Item>
        </DropdownButton>
      </>
    );
  }

export default Raport