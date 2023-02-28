import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import homePageStyle from './home-page.module.css'
import Typewriter from 'typewriter-effect';
import {HomePageHeaderSection} from './home-page-header-section'
import {MySwiper} from '../swiper/myswiper'
import pic from  './home-page.png'
import { useContext } from 'react'
import {ProductsContext} from '../../context/products-context'
//import { Product } from '../main-layout/left-side/product';
//import {useState } from 'react';
//import datas from '../../data.json'

export const HomePage = () => {
    const alldataHomePage= useContext(ProductsContext)
  return (
    <>
     <main className={`${alldataHomePage.isThemeDark ? 'bg-black' : 'bg-white'}  py-5`}>
     <Container fluid className={`${homePageStyle['container']}`}>
        <Row className='mt-5 py-5'>
            <Col className='text-center '>
                <Typewriter className='text-center fs-6'
                    onInit={(typewriter) => {
                        typewriter.typeString('بهترین محصولات را ارایه میدهیم!')
                        .callFunction(() => {
                            //console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            //console.log('All strings were deleted');
                        })
                        .start();
                    }}
                    options={{
                        strings: ['رضایت شما تنها هدف ماست'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Col>
        </Row>
        <Row>
            <Col className='text-center'>
                <img className='img-fluid' src={pic} alt='kids-shop'/>
            </Col>
        </Row>
     </Container>
        <HomePageHeaderSection propIsBtn={true} propBtnTitle={' مشاهده همه' }  propTitle={'جدیدترین محصولات' }/>
        <MySwiper propNewest='new'/>
        <HomePageHeaderSection propIsBtn={false} propBtnTitle={'' }  propTitle={'درباره ما' }/>
        <HomePageHeaderSection propIsBtn={true} propBtnTitle={'مشاهده همه' }  propTitle={'پرفروش ترین محصولات' }/>
        <MySwiper />
     </main>
    </>
   
  )
}
