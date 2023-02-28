import React from 'react'
//import {MainContext} from '../context/main-context'
//import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../../data.json'
import { Container,Col,Row } from 'react-bootstrap'
import {MyBreadcrumb} from '../../breadcrumb/breadcrumb'
import MoreInfoStyle from './more-info.module.css'
import {MoreInfoTabs} from './more-info-tabs'

export const MoreInfo = ({onclickprop}) => {
  let params= useParams()
  //console.log(params.productID)
  let finded=datas.products.find(product => product.id == params.productID)
  console.log(finded)
  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <MyBreadcrumb links={[
          {id:1,title:'خانه' ,to:'/'},
          {id:2,title:'محصولات' ,to:`/products`  },
          {id:3,title:`${finded.subtitle}` ,to:`/product/${finded.id}`  }
        ]}/>
      </Row>
      <Row className='align-items-center'> 
        <Col md={4}>
          <img className='img-fluid' src={finded.img} alt='s'/>
        </Col>
        <Col md={8}>
          <h3 className='fColor3'>{finded.subtitle}</h3>
          <p>{finded.price}</p>
          <p>{finded.material}</p>
          <div className="btn-group maincolor3 text-light" role="group" aria-label="Basic example">
            <button type="button" className="btn text-light">-</button>
            <button type="button" className="btn border text-light">1</button>
            <button type="button" className="btn text-light">+</button>
          </div>
            <button className={`${MoreInfoStyle['btn']}`} >افزودن به سبد خرید</button>
        </Col>

      </Row>
      <Row className='mt-4 mb-5'>
        <MoreInfoTabs propTabs={finded}/>
      </Row>
    </Container>
)
}
