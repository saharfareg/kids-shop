import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { MyNavBar } from './mynavbar'
import {SearchInput} from '../main-layout/search-input'
import pic from './abr-sefid-.svg'
import headerStyle  from './header.module.css'
import { useContext } from 'react'
import {ProductsContext} from '../../context/products-context'
import { FaShoppingCart } from 'react-icons/fa';
import {MyBasket} from './mybasket'
import axios from 'axios'
import { useEffect } from 'react';
import { ThemeToggle } from '../theme-switch/theme-switch'
import { API_URL } from '../../constants/constants';
import { Link } from 'react-router-dom'
export const Header = () => {
  const alldataHeader= useContext(ProductsContext)
//-----------------
  const showbasket=()=>{
    //console.log('basket')
    alldataHeader.setIsShowbag(!alldataHeader.isShowbag)
  }
//--------- themetoggle----------
const themeToggleHandler =(e) =>{ 
 //e.target.checked ? (console.log('dark')) : (console.log('light'))
 alldataHeader.setisThemeDark(!alldataHeader.isThemeDark)
}

  return (
    <>
    <MyNavBar></MyNavBar>
    <Container fluid >
      <Row className='mb-3 align-items-center'>    
        <Col xs={12} md={6} className='mx-auto text-center  mb-3 mb-md-0'>
          <Row>
          <Col xs={2} md={2}>
          <ThemeToggle onclick={themeToggleHandler}/>
          </Col>
          <Col xs={10} md={10}>
            <SearchInput/>
          </Col>
          </Row>
        </Col>
        <Col xs={12} md={3} className='mx-auto text-center '>
          <Row className='align-items-center'>
            <Col xs={9} md={9}>
              <Link className={`${headerStyle['a-login']} `} to='/login'>
                <span> ورود | عضویت</span>
              </Link>
            </Col>
            <Col xs={3} md={3} >
            <a className={`${headerStyle['shoping-icon']} transform-scale`} onClick={showbasket} title='سبد خرید'> <FaShoppingCart className={`${headerStyle['f-color-white']} `}></FaShoppingCart> </a>
          {alldataHeader.isShowbag && (
            <MyBasket></MyBasket>
          )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <img src={pic} alt='under-header'/>
    </>
  )
}

 