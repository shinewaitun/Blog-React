import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar className="bg-body-white border-bottom">
      <Container>
        <Navbar.Brand href="#home"><h2 className='fst-italic'>NORDIC ROSE</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="d-flex justify-content-end">
            <Nav.Link href="#home" className='border-bottom border-dark'>BLOG</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">LINKS</Nav.Link>
            <Nav.Link href="#pricing">PROJECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
