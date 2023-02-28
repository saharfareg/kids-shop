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
  const addToBasket=(id,title,price)=>{
  //console.log(id)
  let addItem=LeftSideaAlldata.allProductsMain.find(product=>product.id===id)
  //------------ show toast -------------
    LeftSideaAlldata2.setIsShowToast(true)
    setTimeout(()=>{
      LeftSideaAlldata2.setIsShowToast(false)
    },3000)
  //------------ check addItem is in basket or no / add Item in basket and change count of Item ------
    if(LeftSideaAlldata2.basket.includes(addItem)){
      addItem.count=addItem.count +1;
      addItem.newPrice=parseFloat(addItem.price) * addItem.count+ ',000'
    }else{
      addItem.count=1
      addItem.newPrice=parseFloat(addItem.price)+ ',000'
      //addItem.newPrice=parseFloat(addItem.price) + parseFloat(addItem.newPrice)
      LeftSideaAlldata2.setBasket([...LeftSideaAlldata2.basket,addItem])
    }
 //--------------------
 LeftSideaAlldata2.setBasketTotalPrice(parseFloat(LeftSideaAlldata2.basketTotalPrice) +parseFloat(addItem.newPrice) )
  }
  return (
    <>
    <Container>
      {LeftSideaAlldata.viewType==='grid' ? (
        <Row sm={2} md={3} lg={4} className="g-4">
        {LeftSideaAlldata.sortedProducts.map(pr=>(
          <Product toLinkProp={`/product/${pr.id}`} key={pr.id} src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} onclickprop={addToBasket.bind(this,pr.id)} />
        ))}
      </Row>
      ) : (
        <Row sm={1} md={1} lg={1} className="g-4">
        {LeftSideaAlldata.sortedProducts.map(pr=>(
          <ProductHorizonal des={pr.desc} toLinkProp={`/product/${pr.id}`} key={pr.id} src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} onclickprop={addToBasket.bind(this,pr.id)} />
        ))}
      </Row>
      )}
      </Container>
      <MyPagination/>
    </>
  )
}
