import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header'
import {MainLayout} from './components/main-layout/main-layout'
import {ProductsContext} from './context/products-context'
import { useEffect, useState } from 'react';
import {productGirl} from './datas/girls/datas-girls'
import {productBoy} from './datas/boys/datas-boys'
import axios from 'axios'
import { API_URL } from './constants/constants';
function App() {
  //const[productGirlApp,setproductGirlApp]=useState([...productGirl])
  //const[productBoyApp,setproductBoyApp]=useState([...productBoy])
  //const[allproductsApp,setallproductsApp]=useState([...productGirl,...productBoy])

  const[productGirlApp,setproductGirlApp]=useState([])
  const[productBoyApp,setproductBoyApp]=useState([])
  const[allproductsApp,setallproductsApp]=useState([])
  const[isShowbag,setisShowbag]=useState(false)

  const[isGirls,setisGirls]=useState(false)
  const[isBoys,setisBoys]=useState(false) 
  
  const[genderStatus,setgenderStatus]=useState('all')
  //---------  category -----
  //const categoryRepeated=allproductsApp.map(pr=>pr.category)
  //const allCategories=['all', ...new Set(categoryRepeated)]
  const[allCategoriesApp,setallCategoriesApp]=useState([])
  //console.log(allCategoriesApp)

  //----------- maincategory ------------------
  const maincategoryRepeated=allproductsApp.map(pr=>pr.maincategory)
  //console.log(maincategoryRepeated) 
  const allMaincategories=['all',...new Set(maincategoryRepeated)]
  //console.log(allMaincategories)
  const[allMaincategoriesApp,setallMaincategoriesApp]=useState(allMaincategories) 
  //console.log(allMaincategoriesApp)

  //----------- subcategory -----
  const subcategoryRepeated=allproductsApp.map(pr=>pr.subcategory)
  //console.log(subcategoryRepeated)
  const allSubCategories=['all',...new Set(subcategoryRepeated)]
  //console.log(allSubCategories)
  const[allSubCategoriesApp,setallSubCategoriesApp]=useState(allSubCategories)
  //console.log(allSubCategoriesApp)

  //----------------------
useEffect(()=>{
  axios.get(`${API_URL}/products`).then((res) =>{
    //console.log(res.data)
    setallproductsApp(res.data)
    setproductBoyApp(res.data.filter(pr=>pr.category=== 'boys' ))
    //console.log(productBoyApp)
    setproductGirlApp(res.data.filter(pr=>pr.category=== 'girls' ))
    //console.log(productGirlApp)
    console.log(['all', ...new Set(res.data.map(pr=>pr.category))])
    setallCategoriesApp(['all', ...new Set(res.data.map(pr=>pr.category))]) 
    console.log(allCategoriesApp)
  })
},[])

  const alldata={
    allproductsApp,setallproductsApp,
    productGirlApp,setproductGirlApp,
    productBoyApp,setproductBoyApp,
    allCategoriesApp,setallCategoriesApp,
    isGirls,setisGirls,
    isBoys,setisBoys,
    genderStatus,setgenderStatus,
    allMaincategoriesApp,setallMaincategoriesApp,
    allSubCategoriesApp,setallSubCategoriesApp,
    isShowbag,setisShowbag
  }

  return (
 <>
 <ProductsContext.Provider value={alldata}>
    <Header></Header>
    <MainLayout></MainLayout>
 </ProductsContext.Provider>

 </>
  );
}

export default App;
