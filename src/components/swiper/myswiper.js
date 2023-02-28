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
import { Autoplay, Pagination, Navigation } from "swiper";

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
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper card-group"
      >
          {propNewest==='new' ? (
            allProducts.map(newProduct=>(
              <SwiperSlide key={newProduct.id} className='card h-100'>
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