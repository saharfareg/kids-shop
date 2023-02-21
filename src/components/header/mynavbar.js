import { Container,Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg'
import mypic from './mypic.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsXLg } from "react-icons/bs"
import { useContext } from "react";
import {ProductsContext} from '../../context/products-context'
import headerStyle  from './header.module.css'
export const MyNavBar= ()=> {
  const alldataMyNavBar= useContext(ProductsContext)
 const hamburgerMenuHandler=(e)=>{
  console.log(e)
  alldataMyNavBar.setbtnhambueger(!alldataMyNavBar.btnhambueger)
  alldataMyNavBar.setshowcollapse(!alldataMyNavBar.showcollapse)
 }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="" variant="" >
      <Container className="mb-3" fluid>
          <Navbar.Brand href="#home">
        <img alt="logo" src={mypic} width="200" height=""className="d-inline-block align-top img-fluid"/>{' '}
       </Navbar.Brand> 
        <button onClick={hamburgerMenuHandler} class={`${headerStyle['btn-custom']} navbar-toggler border-0 a-hover`}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {alldataMyNavBar.btnhambueger ? <GiHamburgerMenu/> : <BsXLg/>} 
        </button>
        <div class={alldataMyNavBar.showcollapse ? "collapse show navbar-collapse" : 'collapse  navbar-collapse'} id="navbarSupportedContent">
        <Nav className="me-auto d-flex width-50 justify-content-around">
            <Nav.Link href="#features" className="fColor3 fw-bold">محصولات</Nav.Link>
            <Nav.Link href="#pricing" className="fColor3 fw-bold">راهنمای خرید </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="fColor3 fw-bold">
              تماس با ما 
            </Nav.Link>
            <Nav.Link href="#deets" className="fColor3 fw-bold"> درباره ما</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
    </>
  );
}
