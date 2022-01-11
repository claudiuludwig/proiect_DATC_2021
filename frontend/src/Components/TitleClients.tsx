import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import LogOut from '../Services/Login-SignUp-LogOut/LogOut'

export interface TitleClientsProps{

}

// eslint-disable-next-line no-empty-pattern
export const TitleClients = ({

}: TitleClientsProps) =>
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
            <LogOut />
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
};