import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import headerStyle from './header.module.css'

export const Basketproduct = ({src,price,subtitle,id,material}) => {
  return (
<>
  <Row className={`${headerStyle['row-basket']}`}>
    <Col xs={5}>
      <img src={src} className="img-fluid rounded-start" alt={subtitle}/>
    </Col>
    <Col xs={7} className="mt-3">
      <h6 class="mb-3">{subtitle} </h6>
      <p ><span class="fs-13">{price}</span></p>
      <p class="fs-13">تعداد : 1</p>
      <p class=""><small class="text-muted">جنس : {material}</small></p>
    </Col>
  </Row>
</>
  )
}
