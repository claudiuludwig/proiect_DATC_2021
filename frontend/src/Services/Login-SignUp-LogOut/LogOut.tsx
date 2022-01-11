import React, { useState } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

function LogOut() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginRight:"10px"}} variant="primary" onClick={handleShow}>
          LogOut
        </Button>
  
        
      </>
    );
  }

export default LogOut