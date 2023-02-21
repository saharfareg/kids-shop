import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import { useContext } from 'react';
import {ProductsContext} from '../../../context/products-context'
import { Product } from './product';
import { Loading } from '../../loading/loading';
export const LeftProducts=()=> {
  const LeftProducts=useContext(ProductsContext)
  
  return (
   <>
   
   
     <Row sm={2} md={3} lg={4} className="g-4">
      {LeftProducts.allproductsApp.map(pr=>(
        <Product key={pr.id} src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id}/>
      ))}
    </Row>
   </>
  
  );
}
