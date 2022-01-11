import React, { useState } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'


function SignUp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginRight:"10px"}} variant="primary" onClick={handleShow}>
          Înscrie-te
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Înscrie-te</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <>
                <Form style={{margin:""}}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Nume</Form.Label>
                <Form.Control type="text" placeholder="Introdu nume" />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Prenume</Form.Label>
                <Form.Control type="text" placeholder="Introdu prenume" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Introdu emailul" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Parolă" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Adresa</Form.Label>
                <Form.Control placeholder="strada, numărul etc." />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>CNP</Form.Label>
                <Form.Control placeholder="format din 13 cifre" />
                </Form.Group>

                <Form.Group as={Col}>
                <Form.Label>Număr de telefon</Form.Label>
                <Form.Control placeholder="format din 10 cifre" />
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
  

export default SignUp