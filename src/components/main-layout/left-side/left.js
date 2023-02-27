import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Product } from './product';
import { ProductHorizonal } from './product-horizonal';
import { useContext } from 'react';
import {ProductsContext} from '../../../context/products-context'
import {MainContext} from '../context/main-context'
import {MyPagination} from '../../pagination/pagination'

export const LeftSide = () => {

  const LeftSideaAlldata=useContext(MainContext)
  const LeftSideaAlldata2=useContext(ProductsContext)
  //-------------------
  const moreInfoHandler=(id)=>{
    //console.log(id)
  }
  //-------------------
  const addToBasket=(id,title,price)=>{
    //console.log(id)
    let addItem=LeftSideaAlldata.allProductsMain.find(product=>product.id===id)
    if(addItem.count){
      addItem.count=addItem.count +1;
    }else{
      addItem.count=1
    }
    LeftSideaAlldata2.setBasket([...LeftSideaAlldata2.basket,addItem])
    LeftSideaAlldata2.setIsShowToast(true)
    setTimeout(()=>{
      LeftSideaAlldata2.setIsShowToast(false)
  },3000)
 //--------------------

  }
  return (
    <>
    <Container>
      {LeftSideaAlldata.viewType==='grid' ? (
        <Row sm={2} md={3} lg={4} className="g-4">
        {LeftSideaAlldata.sortedProducts.map(pr=>(
          <Product  toLinkProp={`/product/${pr.id}`} key={pr.id} src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} onclickprop={addToBasket.bind(this,pr.id)} onMoreInfo={moreInfoHandler.bind(this,pr.id)}/>
        ))}
      </Row>
      ) : (
        <Row sm={1} md={1} lg={1} className="g-4">
        {LeftSideaAlldata.sortedProducts.map(pr=>(
          <ProductHorizonal des={pr.desc} toLinkProp={`/product/${pr.id}`} key={pr.id} src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} onclickprop={addToBasket.bind(this,pr.id)} onMoreInfo={moreInfoHandler.bind(this,pr.id)}/>
        ))}
      </Row>
      )}
      </Container>
      <MyPagination/>
    
    </>
  )

}
