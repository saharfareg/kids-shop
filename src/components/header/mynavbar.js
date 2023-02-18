import { Container,Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic from './abr-sefid-.svg'
import logo from './logo.jpg'
import {MyBasket} from './mybasket'
import { useContext } from 'react';
import {ProductsContext} from '../../context/products-context'

export const MyNavBar= ()=> {
  const usecontextmynavbar=useContext(ProductsContext)

  const showbasket=()=>{
    console.log('basket')
    usecontextmynavbar.setisShowbag(true)
  }
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
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes" onClick={showbasket}>
               سبد خرید  
            </Nav.Link>
            {usecontextmynavbar.isShowbag && (
            <MyBasket></MyBasket>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
