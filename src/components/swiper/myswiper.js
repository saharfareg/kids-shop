import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Container, Row } from "react-bootstrap";
import datas from '../../data.json'
import { Product } from "../main-layout/left-side/product";

export  const MySwiper= ({propNewest})=>{
    const[popularProducts,setPopularProducts]=useState([])
    const[allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        setPopularProducts(datas.popularProducts)
        setAllProducts(datas.products)
    },[])
  return (
    <>
    <Container>
        <Row>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="mySwiper "
          >
          {propNewest==='new' ? (
            allProducts.map(newProduct=>(
              <SwiperSlide key={newProduct.id} className='h-100'>
                  <Product  toLinkProp={`/product/${newProduct.id}`} key={newProduct.id} src={newProduct.img} price={newProduct.price} subtitle={newProduct.subtitle} id={newProduct.id} />
              </SwiperSlide>
          ))
          ):(
            popularProducts.map(popularProduct=>(
              <SwiperSlide key={popularProduct.id}>
                  <Product toLinkProp={`/product/${popularProduct.id}`} key={popularProduct.id} src={popularProduct.img} price={popularProduct.price} subtitle={popularProduct.subtitle} id={popularProduct.id} />
              </SwiperSlide>
          ))
          )}
          </Swiper>
        </Row>
    </Container>
      
    </>
  );
}