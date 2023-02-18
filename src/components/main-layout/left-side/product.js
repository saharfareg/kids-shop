
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import { useContext } from 'react';
import {ProductsContext} from '../../../context/products-context'
import leftStyle from './left.module.css'
export const Product = ({src,price,subtitle,footercolor}) => {
    const alldataProduct=useContext(ProductsContext)
  return (
    <>
    <Col>
          <Card className={`${leftStyle['cardcustom']} ${leftStyle['b-shadow-card']} h-100 text-center`}>
            <div className='position-relative'>
                <a className={`${leftStyle['badg-costum']} badge  position-absolute text-decoration-none`}>New</a>
                <Card.Img variant="top" src={src} />
                <span className={`${leftStyle['badg-off']} badge  position-absolute text-decoration-none`}>20%</span>
                <div className={`${leftStyle['div-container']}  `}>
                    <Card.Link href="#" className={`${leftStyle['more-info']}`} target='_blank'>جزییات بیشتر </Card.Link>
                </div>
            </div>
            <Card.Body>
              <Card.Title>{subtitle}</Card.Title>
              <Card.Text>
                {price}
              </Card.Text>
            </Card.Body>
            <Card.Footer className={alldataProduct.isGirls && alldataProduct.genderStatus!== 'all' ?
              'maincolor1' : alldataProduct.isBoys ?
              'maincolor2' : 'maincolor3'}>
              <button className={`${leftStyle['card-botton-style']} border-0 bg-transparent text-white fs-8`}>افزودن به سبد خرید</button>
          </Card.Footer>
          </Card>
    </Col>
    </>
  )
}
