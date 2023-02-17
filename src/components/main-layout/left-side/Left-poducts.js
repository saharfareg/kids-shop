import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import { useContext } from 'react';
import {ProductsContext} from '../../../context/products-context'
import { Product } from './product';
export const LeftProducts=()=> {
  const LeftProducts=useContext(ProductsContext)
  
  return (
    
    <Row xs={1} md={3} className="g-4">
      {LeftProducts.genderStatus==='all' &&
      LeftProducts.allproductsApp.map(pr=>(
        <Product src={pr.img} price={pr.price} subtitle={pr.subtitle}/>
      ))}
      {LeftProducts.isGirls && LeftProducts.genderStatus==='girls' &&
        LeftProducts.productGirlApp.map(pr=>(
          <Product src={pr.img} price={pr.price} subtitle={pr.subtitle} />
        ))
      }
      {LeftProducts.isBoys && LeftProducts.genderStatus==='boys' &&
        LeftProducts.productBoyApp.map(pr=>(
          <Product src={pr.img} price={pr.price} subtitle={pr.subtitle} />
        ))
      }
    </Row>
  );
}
