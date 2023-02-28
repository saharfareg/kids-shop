import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import leftStyle from './left.module.css'
import { Link } from 'react-router-dom';
//import { Loading } from '../../loading/loading';

export const Product = ({src,price,subtitle,onclickprop,toLinkProp}) => {
 
  return (
    <>
    <Col>
          <Card className={`${leftStyle['cardcustom'] } ${leftStyle['b-shadow-card']} h-100 text-center`}>
            <div className='position-relative'>
                <span  className={`${leftStyle['badg-costum']} badge  position-absolute text-decoration-none`}>New</span>
                <Card.Img variant="top" src={src} />
                <span className={`${leftStyle['badg-off']} badge  position-absolute text-decoration-none`}>20%</span>
                <div className={`${leftStyle['div-container']}  `}>
                    <Link to={toLinkProp} className={`${leftStyle['more-info']}`} >بیشتر جزییات</Link>
                </div>
            </div>
            <Card.Body>
              <Card.Title className='h6'><span>{subtitle}</span> </Card.Title>
              <Card.Text className={`${leftStyle['price-container']}`}>
                 {price}تومان
              </Card.Text>
            </Card.Body>
            <Card.Footer className='maincolor3 px-0'>
              <button className={`${leftStyle['card-botton-style']} border-0 bg-transparent text-white fs-8`} onClick={onclickprop}>افزودن به سبد خرید</button>
          </Card.Footer>
          </Card>
    </Col>
    </>
  )
}
