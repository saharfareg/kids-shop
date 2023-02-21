
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap'
import { useContext } from 'react';
import {ProductsContext} from '../../../context/products-context'
import leftStyle from './left.module.css'
export const Product = ({src,price,subtitle,footercolor,id}) => {
    const alldataProduct=useContext(ProductsContext)

const addToBasket=(id,subtitle,price)=>{
  console.log(id)
  let filteredPr=alldataProduct.allproductsApp.find(pr=>pr.id===id)
  //console.log(filteredPr)
  //console.log([...alldataProduct.basket,filteredPr])
  alldataProduct.setbasket([...alldataProduct.basket,filteredPr])
  alldataProduct.setisShowToast(true)
  setTimeout(()=>{
    alldataProduct.setisShowToast(false)
},3000)

 /* let isInbag= alldataProduct.basket.some(pro=>pro.id===id)
    console.log(isInbag)
  let selectedProduct={
      id:id,
      title:subtitle,
      price:price,
      count:1
  }
  console.log(selectedProduct)

   if(isInbag===false){
  alldataProduct.setbasket([...alldataProduct.basket,selectedProduct])
    console.log(alldataProduct.basket)
  let basketjadid=[...alldataProduct.basket]
    console.log(basketjadid)
    basketjadid.map( bagpro =>{
    if(bagpro.title===subtitle){
        bagpro.count +=1
    }
    return bagpro
   })
   alldataProduct.setbasket(basketjadid)
  
}
 */
}

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
              <Card.Title className='h6'><span>{subtitle}</span> </Card.Title>
              <Card.Text className={`${leftStyle['price-container']}`}>
                {price}
              </Card.Text>
            </Card.Body>
            <Card.Footer className={alldataProduct.isGirls && alldataProduct.genderStatus!== 'all' ?
              'maincolor1 px-0' : alldataProduct.isBoys ?
              'maincolor2 px-0' : 'maincolor3 px-0'}>
              <button className={`${leftStyle['card-botton-style']} border-0 bg-transparent text-white fs-8`} onClick={addToBasket.bind(this,id,subtitle,price)}>افزودن به سبد خرید</button>
          </Card.Footer>
          </Card>
    </Col>
    </>
  )
}
