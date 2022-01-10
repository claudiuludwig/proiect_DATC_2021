import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Title()
{
return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/src/index.tsx">City Dangers Alert</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/src/Pages/Login.tsx">Login</Nav.Link>
        <Nav.Link href="/src/Pagesc/SignUp.tsx">Înscrie-te</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
);
}
export default Title