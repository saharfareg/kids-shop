import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import homePageStyle from './home-page.module.css'
import Typewriter from 'typewriter-effect';
import {HomePageHeaderSection} from './home-page-header-section'
import { Product } from '../main-layout/left-side/product';
import {useState } from 'react';
import datas from '../../data.json'
import {MySwiper} from '../swiper/myswiper'

export const HomePage = () => {
    const[allProductsHomePage,setallProductsHomePage]=useState(datas.products)
   // const[popularProductsHomePage,setpopularProductsHomePage]=useState(datas.popularProduct)
    //console.log(allProductsHomePage)
    //console.log(popularProductsHomePage)
  return (
    <>
     <Container fluid className={`${homePageStyle['container']}`}>
        <Row>
            <Col className='text-center py-5'>
                <Typewriter className='text-center fs-8'
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
     </Container>
     <main>
     <HomePageHeaderSection propIsBtn={true} propBtnTitle={' مشاهده همه' } propDes={''} propTitle={'جدیدترین محصولات' }/>
     <MySwiper propNewest='new'/>
     <HomePageHeaderSection propIsBtn={false} propBtnTitle={'' } propDes={''} propTitle={'درباره ما' }/>
     <HomePageHeaderSection propIsBtn={true} propBtnTitle={'مشاهده همه' } propDes={''} propTitle={'پرفروش ترین محصولات' }/>
     <MySwiper />
     </main>
    </>
   
  )
}
