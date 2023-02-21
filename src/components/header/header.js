import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { MyNavBar } from './mynavbar'
import {HeaderUnder1} from './header-under1'
import pic from './abr-sefid-.svg'
import headerStyle  from './header.module.css'
import { useContext } from 'react'
import {ProductsContext} from '../../context/products-context'
import { HeaderUnder2 } from './header-under2'
import { FaShoppingCart } from 'react-icons/fa';
import {MyBasket} from './mybasket'
import axios from 'axios'
import { useEffect } from 'react';
import { ThemeToggle } from '../theme-switch/theme-switch'
import { API_URL } from '../../constants/constants';
export const Header = () => {
  const alldataHeader= useContext(ProductsContext)

  //const loadProducts=()=>{
   // axios.get(`${API_URL}/products`).then((res) =>{
   // alldataHeader.setallproductsApp(res.data)
    //})
  //}
  //useEffect(()=>{
  //  loadProducts()
  //},[])
 //-------------- 
  const genderHandler=(gender)=>{
    alldataHeader.setallproductsApp(alldataHeader.allproductsApp.filter(product=>product.category=== gender))
  }
//--------------------------------
  const shoeshandler=(gender,maincategory)=>{
    console.log(alldataHeader.allproductsApp)
    alldataHeader.setallproductsApp(alldataHeader.allproductsApp.filter((product=>product.category===gender  &&  product.maincategory===maincategory)))
  }
  useEffect(()=>{
    
  },[alldataHeader.allproductsApp])


//-----------------
  const showbasket=()=>{
    console.log('basket')
    alldataHeader.setisShowbag(!alldataHeader.isShowbag)
  }
//--------- themetoggle----------
const themeToggleHandler =(e) =>{ 
 e.target.checked ? (console.log('dark')) : (console.log('light'))
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
          <HeaderUnder1/>
          </Col>
          </Row>
        </Col>
        <Col xs={12} md={3} className='mx-auto text-center '>
          <Row className='align-items-center'>
            <Col xs={9} md={9}>
              <a className={`${headerStyle['a-login']} `}>
                <span> ورود | عضویت</span>
              </a>
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
      <Row>
        <Col md={9} className='mx-auto text-center'>
          <Row>
            <HeaderUnder2 onclick={genderHandler.bind(this,'girls')} title={'دخترانه'} src={'/images/icons/girl-icon.png'} />
            <HeaderUnder2 onclick={shoeshandler.bind(this,'girls','shoes')} title={'کفش دخترانه'} src={'/images/icons/show-girl-icon.png'} />
            <HeaderUnder2 onclick={genderHandler.bind(this,'boys')} title={'پسرانه'} src={'/images/icons/boy-icon.png'} />
            <HeaderUnder2 onclick={shoeshandler.bind(this,'boys','shoes')} title={'کفش پسرانه'} src={'/images/icons/show-boy-icon.png'} />
          </Row>
        </Col>
      </Row>
      <Row >
        <Col  className='mx-auto text-center'>
          <img src={pic} alt='under-header'/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

 