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

export const Header = () => {

  const alldataHeader= useContext(ProductsContext)

  const girlshandler=()=>{
    //alldataHeader.setallproductsApp(alldataHeader.allproductsApp) 
    //console.log('girls')
    alldataHeader.setisBoys(false)
    alldataHeader.setisGirls(true)
    alldataHeader.setgenderStatus('girls')
  }
  const boysshandler=()=>{
    //alldataHeader.setallproductsApp(alldataHeader.allproductsApp)  
    //console.log('boys')
    alldataHeader.setisBoys(true)
    alldataHeader.setisGirls(false)
    alldataHeader.setgenderStatus('boys')
  }

  const shoeshandlerboys=(gender,shoes)=>{
      //alldataHeader.setallproductsApp([...productGirl,...productBoy]) 
      //console.log(alldataHeader.allproductsApp)
      //console.log(gender)
      //console.log(alldataHeader.allproductsApp)
      //let jadid=[...alldataHeader.allproductsApp].filter(pr=>(pr.maincategory==='shoes' && pr.category===gender))
      //console.log(jadid)
    // alldataHeader.setallproductsApp(jadid)
    alldataHeader.setmaincategoryApp(['shoes'])
    console.log(alldataHeader.maincategoryApp)
    
    alldataHeader.setisBoys(true)
    alldataHeader.setisGirls(false)
    alldataHeader.setgenderStatus('boys')
  }
  const shoeshandlergirls=(gender,shoes)=>{
    alldataHeader.setmaincategoryApp(['shoes'])
    console.log(alldataHeader.maincategoryApp)
    alldataHeader.setisBoys(false)
    alldataHeader.setisGirls(true)
    alldataHeader.setgenderStatus('girls')
  }
  return (
    <>
    <MyNavBar></MyNavBar>
    <Container fluid >
      <Row >    
        <Col md={6} className='mx-auto text-center'>
          <HeaderUnder1/>
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

 