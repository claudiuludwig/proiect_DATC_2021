import React from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

function Login()
{
    return(
<>
<Modal.Dialog>
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
    <Button variant="secondary">Închide</Button>
    <Button variant="primary">Salvează</Button>
  </Modal.Footer>
</Modal.Dialog>
</>
    );
}

export default Login