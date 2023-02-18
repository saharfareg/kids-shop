import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { MyNavBar } from './mynavbar'
import {HeaderUnder1} from './header-under1'
import pic from './abr-sefid-.svg'
import headerStyle  from './header.module.css'
import { useContext } from 'react'
import {ProductsContext} from '../../context/products-context'
import { HeaderUnder2 } from './header-under2'
import {productGirl} from '../../datas/girls/datas-girls'
import {productBoy} from '../../datas/boys/datas-boys'
import { FaShoppingCart } from 'react-icons/fa';
import {MyBasket} from './mybasket'

export const Header = () => {

  const alldataHeader= useContext(ProductsContext)

  const girlshandler=()=>{
    
    alldataHeader.setisBoys(false)
    alldataHeader.setisGirls(true)
    alldataHeader.setgenderStatus('girls')
  }
  const boysshandler=()=>{
  
    alldataHeader.setisBoys(true)
    alldataHeader.setisGirls(false)
    alldataHeader.setgenderStatus('boys')
  }
//--------------
  const shoeshandlerboys=(gender,shoes)=>{
    //console.log(alldataHeader.maincategoryApp)
    //alldataHeader.setmaincategoryApp(['shoes'])
    //console.log(alldataHeader.maincategoryApp)
    
    alldataHeader.setisBoys(true)
    alldataHeader.setisGirls(false)
    alldataHeader.setgenderStatus('boys')
    console.log(alldataHeader.allproductsApp)
    console.log([...new Set(alldataHeader.allproductsApp.map(pr=>pr.category))])
    alldataHeader.setallMaincategoriesApp([...new Set(alldataHeader.allproductsApp.map(pr=>pr.category))])
  
    console.log(alldataHeader.allMaincategoriesApp)

  }
  const shoeshandlergirls=(gender,shoes)=>{
    alldataHeader.setmaincategoryApp(['shoes'])
    console.log(alldataHeader.maincategoryApp)
    alldataHeader.setisBoys(false)
    alldataHeader.setisGirls(true)
    alldataHeader.setgenderStatus('girls')
  }
 

  const showbasket=()=>{
    console.log('basket')
    alldataHeader.setisShowbag(!alldataHeader.isShowbag)
  }

  return (
    <>
    <MyNavBar></MyNavBar>
    <Container fluid >
      <Row className='mb-3 align-items-center'> 
        <Col xs={1} md={3} className='mx-auto text-center'>
          
        </Col>   
        <Col xs={9} md={6} className='mx-auto text-center'>
          <HeaderUnder1/>
        </Col>
        <Col xs={2} md={3} className='mx-auto text-center'>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
            <a className={`${headerStyle['shoping-icon']}`} onClick={showbasket} title='سبد خرید'> <FaShoppingCart className={`${headerStyle['f-color-white']}`}></FaShoppingCart> </a>
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
            <HeaderUnder2 onclick={girlshandler} title={'دخترانه'} src={'/images/icons/girl-icon.png'} />
            <HeaderUnder2 onclick={shoeshandlergirls.bind(this,'girls','shoes')} title={'کفش دخترانه'} src={'/images/icons/show-girl-icon.png'} />
            <HeaderUnder2 onclick={boysshandler} title={'پسرانه'} src={'/images/icons/boy-icon.png'} />
            <HeaderUnder2 onclick={shoeshandlerboys.bind(this,'boys','shoes')} title={'کفش پسرانه'} src={'/images/icons/show-boy-icon.png'} />
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

 