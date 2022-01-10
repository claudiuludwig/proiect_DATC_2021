import React, { useState } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

function Login() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginRight:"10px"}} variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Conectează-te</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
            <Form style={{margin:""}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Introdu emailul" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Parolă</Form.Label>
                <Form.Control type="password" placeholder="Parolă" />
                </Form.Group>
            </Row>
            </Form>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Închide
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salvează
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Login