import { Container,Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg'


export const MyNavBar= ()=> {
 
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="" variant="" >
      <Container className="mb-3">
          <Navbar.Brand href="#home">
        <img alt="logo" src={logo} width="30"height="30"className="d-inline-block align-top"/>{' '}
       </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">محصولات</Nav.Link>
            <Nav.Link href="#pricing">راهنمای خرید محصولات</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              تماس با ما 
            </Nav.Link>
            <Nav.Link href="#deets"> درباره ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
