import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import homePageStyle from './home-page.module.css'
import {AiOutlineCaretLeft} from  'react-icons/ai'
import icon from './header-section.png'

export const HomePageHeaderSection = ({propTitle,propIsBtn,propBtnTitle}) => {
    let navigate=useNavigate()
  return (
    <Container className='my-5'>
        <Row className='align-items-center'>
            <Col xs={8}>
                <span><img src={icon} alt='kids-shop' width='24px' className='img-fluid'/> </span>
                <span className={`${homePageStyle['border-bottom']} fs-6 ms-1`}>{propTitle}</span>
            </Col>
            <Col xs={4} className='text-center direction-ltr'>
                {propIsBtn && (
                    <button className={`${homePageStyle['btn']} d-flex align-items-center justify-content-around`} onClick={()=>{
                    navigate('/products')
                }}>
                <span className='fs-8'>{propBtnTitle}</span>
                <AiOutlineCaretLeft className=''/>
                </button>
                )}
                
            </Col>
        </Row>
    </Container>
  )
}
