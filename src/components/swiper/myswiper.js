import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Pagination } from "swiper";
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
    //console.log(popularProducts)
  return (
    <>
    <Container>
        <Row>
        <Swiper
         slidesPerView={5}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         loop={true}
         className="mySwiper"
       >
 {propNewest==='new' ? (
  allProducts.map(popularProduct=>(
    <SwiperSlide key={popularProduct.id}>
        <Product toLinkProp={`/product/${popularProduct.id}`} key={popularProduct.id} src={popularProduct.img} price={popularProduct.price} subtitle={popularProduct.subtitle} id={popularProduct.id} />
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