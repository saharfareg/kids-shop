import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const HomePageHeaderSection = ({propTitle,propIsBtn,propBtnTitle,propDes}) => {
    let navigate=useNavigate()
  return (
    <Container className='my-5'>
        <Row>
            <Col xs={6}>
                <h2>{propTitle}</h2>
            </Col>
            <Col xs={6} className='text-center'>
                {propIsBtn && (
                    <button onClick={()=>{
                    navigate('/products')
                }}>{propBtnTitle}</button>
                )}
                
            </Col>
        </Row>
    </Container>
  )
}
