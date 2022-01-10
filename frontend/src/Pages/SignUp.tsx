import React from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

function SignUp()
{
    return(
<>
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Înscrie-te</Modal.Title>
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
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Parolă" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Adresa</Form.Label>
    <Form.Control placeholder="strada, numărul etc." />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>CNP</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Număr de telefon</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  </Form>
  </>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Închide</Button>
    <Button variant="primary">Salvează</Button>
  </Modal.Footer>
</Modal.Dialog>

</>
);
}

export default SignUp