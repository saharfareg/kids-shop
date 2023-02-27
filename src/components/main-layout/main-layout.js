import React from 'react'
import axios from 'axios';
import { Container,Col,Row } from 'react-bootstrap'
import {LeftSide} from './left-side/left.js'
import {RightSide} from './right-side/right.js'
import { Loading } from '../loading/loading.js'
import { useContext } from 'react';
import {ProductsContext} from '../../context/products-context'
import datas from '../../data.json'
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/constants.js';
import { FilterImg } from './filter-img.js';
import { MainContext } from './context/main-context.js';
import { SearchInput } from './search-input';
import { MoreInfo } from './more-info-product/more-info.js';
import {MyBreadcrumb} from '../breadcrumb/breadcrumb'
import { HiOutlineViewList,HiViewGrid } from "react-icons/hi";
import mainStyle  from './main.module.css'

export const MainLayout = () => {
//----------- chang viewType---------    
const[viewType,setViewType]=useState('grid')
const viweTypeHandler=(viewtype)=>{
console.log(viewtype)
setViewType(viewtype)
}

    const mainUseContex =useContext(ProductsContext)
    //-----------All products ---------
    const[allProductsMain,setallProductsMain]=useState(datas.products)
    mainUseContex.setIsLoading(false)
   //---------- searchInput---------------
    const[searchInput,setSearchInput]=useState('')
    //----------- FILTERING iTEM --- 
    const[item,setItem]=useState(allProductsMain)
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
//-----------  sorting && filtering ----------------
    const[sortedProducts,setSortedProducts]=useState(allProductsMain) 
    const[sortStatus,setSortStatus]=useState('default')
    const statusHandler=(e)=>{
    setSortStatus(e.target.value)
  }
  useEffect(()=>{
    switch(sortStatus) { 
            case 'cheap':
          // code block
            break;
            case 'free':
                setSortedProducts(allProductsMain.filter(product=>product.price=== "0"))
            break;
            case 'expensive':
                // code block
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
//--------------------------------

const mainData={
    allProductsMain,setallProductsMain,
    item,setItem,
    searchInput,setSearchInput,
   //isShowbag,setIsShowbag,
   sortedProducts,setSortedProducts,
   viewType,setViewType
}
  return (
    <>
    {mainUseContex.isLoading && <Loading />}
    <MainContext.Provider value={mainData}>
        <Container fluid >
            <Row>
                <MyBreadcrumb links={[
                    {id:1,title:'خانه',to:'/'},
                    {id:2,title:'محصولات',to:'/products'}
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
                            <Col className='col-3 text-center'>
                                <HiOutlineViewList className={`${mainStyle['icon-viewType']}`} onClick={viweTypeHandler.bind(this,'row')}/>
                                <HiViewGrid className={`${mainStyle['icon-viewType']} ms-2`} onClick={viweTypeHandler.bind(this,'grid')}/>
                            </Col > 
                            <Col className='col-9'>
                                <SearchInput/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-md-4 col-12'>
                        <select class="form-select" aria-label="Default select example" onChange={statusHandler}>
                            <option value="default" selected>مرتب سازی پیش فرض</option>
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
