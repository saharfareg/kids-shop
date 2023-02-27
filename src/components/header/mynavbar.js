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
import  { Link ,NavLink}  from "react-router-dom";

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
          <NavLink to="/">
        <img alt="logo" src={mypic} width="200" height=""className="d-inline-block align-top img-fluid"/>{' '}
       </NavLink> 
        <button onClick={hamburgerMenuHandler} className={`${headerStyle['btn-custom']} navbar-toggler border-0 a-hover`}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {alldataMyNavBar.btnhambueger ? <GiHamburgerMenu/> : <BsXLg/>} 
        </button>
        <div className={alldataMyNavBar.showcollapse ? "collapse show navbar-collapse" : 'collapse  navbar-collapse'} id="navbarSupportedContent">
        <Nav className="me-auto d-flex width-50 justify-content-around">
            <NavLink to='/products' className="fColor3 fw-bold text-decoration-none">محصولات</NavLink>
            <NavLink to='/help' className="fColor3 fw-bold text-decoration-none">راهنمای خرید </NavLink>
            <NavLink to='/contact-us' className="fColor3 fw-bold text-decoration-none">تماس با ما</NavLink>
            <NavLink to='/about-us' className={(link)=>link.isActive ? `${headerStyle['active-link']} fColor3 fw-bold text-decoration-none` : 'fColor3 fw-bold text-decoration-none'}>درباره ما</NavLink>
          </Nav>
        </div>
      </Container>
    </Navbar>
    </>
  );
}
