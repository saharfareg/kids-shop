import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import headerStyle from './header.module.css'

export const Basketproduct = ({src,price,subtitle,id,material,count,newPrice}) => {
  return (
<>
  <Row className={`${headerStyle['row-basket']}`}>
    <Col xs={5}>
      <img src={src} className="img-fluid rounded-start" alt={subtitle}/>
    </Col>
    <Col xs={7} className="mt-3">
      <h6 className="mb-3">{subtitle} </h6>
      <p ><span className="fs-13">{price} تومان</span></p>
      <p className="fs-13">تعداد :{count}</p>
      <p className="fs-13">مجموع بها :{newPrice} تومان</p>
      <p className=""><small className="text-muted">جنس : {material}</small></p>
    </Col>
  </Row>
</>
  )
}
