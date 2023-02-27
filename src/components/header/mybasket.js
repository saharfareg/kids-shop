import React from 'react'
import { Container,Col, Row } from "react-bootstrap";
import { useContext } from 'react';
import {ProductsContext} from '../../context/products-context'
import headerStyle from './header.module.css'
import Card from 'react-bootstrap/Card';
import {Basketproduct} from './basket-product'
export const MyBasket = () => {
    const alldataMyBasket= useContext(ProductsContext)
    
    return (
    <>
    <div  className={`${headerStyle['basket']}`} > 
    <Container>
    {alldataMyBasket.basket.map(pr=>(
      <Basketproduct src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} material={pr.material} count={pr.count}/>
    ))}
    </Container>
    <Row className='mt-5 align-items-center'>
      <Col xs={5}>
        <div>مبلغ قابل پرداخت:</div>
        <div className='fColor3 fw-bold'>888هزارتومان</div>
      </Col>
      <Col xs={7}>
        <a className={`${headerStyle['basket-a']} `}>ورود و ثبت سفارش</a>
      </Col>
    </Row>
    </div>       
      </>
   )
  }
  