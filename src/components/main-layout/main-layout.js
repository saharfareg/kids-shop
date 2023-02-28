import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import {LeftSide} from './left-side/left.js'
import {RightSide} from './right-side/right.js'
import { Loading } from '../loading/loading.js'
import { useContext } from 'react';
import {ProductsContext} from '../../context/products-context'
import datas from '../../data.json'
import { useEffect, useState } from 'react';
import { FilterImg } from './filter-img.js';
import { MainContext } from './context/main-context.js';
import { SearchInput } from './search-input';
import {MyBreadcrumb} from '../breadcrumb/breadcrumb'
import { HiOutlineViewList,HiViewGrid } from "react-icons/hi";
import mainStyle  from './main.module.css'
//import axios from 'axios';
//import { API_URL } from '../../constants/constants.js';
//import { MoreInfo } from './more-info-product/more-info.js';

export const MainLayout = () => {
    const mainUseContex =useContext(ProductsContext)
    //----------- chang viewType---------    
    const[viewType,setViewType]=useState('grid')
    const viweTypeHandler=(viewtype)=>{
        //console.log(viewtype)
        setViewType(viewtype)
    }
    //-----------All products ---------
    const[allProductsMain,setallProductsMain]=useState(datas.products)
    mainUseContex.setIsLoading(false)
   //---------- searchInput---------------
    //const[searchInput,setSearchInput]=useState('')
//==========  sorting && filtering ===============
    const[sortedProducts,setSortedProducts]=useState(allProductsMain) 
    const[sortStatus,setSortStatus]=useState('default')
    //------------sorting------------
    const statusHandler=(e)=>{
        setSortStatus(e.target.value)
    }
        useEffect(()=>{
            switch(sortStatus) { 
            case 'cheap':
                // .......
            break;
            case 'expensive':
                // .......
            break;
            case 'free':
                setSortedProducts(allProductsMain.filter(product=>product.price=== "0"))
            break;
            case 'new':
                setSortedProducts(allProductsMain)
            break; 
            case 'old':
                setSortedProducts(allProductsMain.slice().reverse())
            break;
            default:
            setSortedProducts(allProductsMain) 
      }
        },[sortStatus])
    //----------- filtering --- ------
    const filterHandler=(category,maincategoryy)=>{
        console.log(category,maincategoryy)
        mainUseContex.setIsLoading(true)
        allProductsMain.filter(product=>{
            if(product.category=== category && product.maincategory=== maincategoryy){
                console.log('up')
                setSortedProducts(allProductsMain.filter(product=>product.category=== category && product.maincategory=== maincategoryy ))
            }else{
                console.log('down')
                setSortedProducts(allProductsMain.filter(product=>product.category=== category )) 
            }
        })
    }
//--------------------------------

    const mainData={
        allProductsMain,setallProductsMain,
        //searchInput,setSearchInput,
        sortedProducts,setSortedProducts,
        viewType,setViewType,
        //isShowbag,setIsShowbag,
        //item,setItem,
       
    }
  return (
    <>
    {mainUseContex.isLoading && <Loading />}
    <MainContext.Provider value={mainData}>
        <Container fluid className={`${mainUseContex.isThemeDark ? 'bg-black' : 'bg-white'}  mt-5 pt-5`} >
            <Row className='mt-5'>
                <MyBreadcrumb links={[
                    {id:1,title:'خانه',to:'/',active:false},
                    {id:2,title:'محصولات',to:'/products',active:true}
                ]}/>
            </Row>
            <Row>
                <Col className='col-11 mx-auto'>
                    <Row>
                        <Col md={9} className='mx-auto text-center'>
                            <Row>
                                <FilterImg onclick={filterHandler.bind(this,'girls','all')} title={'دخترانه'} src={'/images/icons/girl-icon.png'} />
                                <FilterImg onclick={filterHandler.bind(this,'girls','shoes')} title={'کفش دخترانه'} src={'/images/icons/show-girl-icon.png'} />
                                <FilterImg onclick={filterHandler.bind(this,'boys','all')} title={'پسرانه'} src={'/images/icons/boy-icon.png'} />
                                <FilterImg onclick={filterHandler.bind(this,'boys','shoes')} title={'کفش پسرانه'} src={'/images/icons/show-boy-icon.png'} />
                            </Row>
                        </Col>
                    </Row>
                    <Row className='my-5 align-items-center'>
                        <Col className='col-md-8 col-12 mb-3 mb-md-0'>
                            <Row className=' align-items-center'>
                                <Col className='col-3 text-center d-flex'>
                                    <HiOutlineViewList className={`${mainStyle['icon-viewType']}`} onClick={viweTypeHandler.bind(this,'row')}/>
                                    <HiViewGrid className={`${mainStyle['icon-viewType']} ms-2`} onClick={viweTypeHandler.bind(this,'grid')}/>
                                </Col > 
                                <Col className='col-9'>
                                    <SearchInput/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='col-md-4 col-12'>
                            <select className="form-select" aria-label="Default select example" onChange={statusHandler}>
                                <option value="default" >مرتب سازی پیش فرض</option>
                                <option value="free"> رایگان</option>
                                <option value="new">جدیدترین </option>
                                <option value="old">قدیمی ترین</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}  lg={3} className='mb-4'>
                            <RightSide></RightSide>
                        </Col>
                        <Col xs={12} md={8}  lg={9}>
                            <LeftSide ></LeftSide>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </MainContext.Provider>
    </>
  )
}
