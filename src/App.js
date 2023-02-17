import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header'
import {MainLayout} from './components/main-layout/main-layout'
import {ProductsContext} from './context/products-context'
import { useState } from 'react';
import {productGirl} from './datas/girls/datas-girls'
import {productBoy} from './datas/boys/datas-boys'
function App() {
  const[productGirlApp,setproductGirlApp]=useState([...productGirl])
  const[productBoyApp,setproductBoyApp]=useState([...productBoy])
  const[allproductsApp,setallproductsApp]=useState([...productGirl,...productBoy])
  const[isGirls,setisGirls]=useState(false)
  const[isBoys,setisBoys]=useState(false) 
  
  const[genderStatus,setgenderStatus]=useState('all')

  const categoryRepeated=allproductsApp.map(pr=>pr.category)
  const allCategories=['all',...new Set(categoryRepeated)]
 
  const[allCategoriesApp,setallCategoriesApp]=useState(allCategories)


  const maincategoryRepeated=allproductsApp.map(pr=>pr.maincategory)
  const allMaincategoryApp=['all',...new Set(maincategoryRepeated)]
  const[maincategoryApp,setmaincategoryApp]=useState(allMaincategoryApp) 
  console.log(maincategoryApp)

  const alldata={
    allproductsApp,setallproductsApp,
    productGirlApp,setproductGirlApp,
    productBoyApp,setproductBoyApp,
    allCategoriesApp,setallCategoriesApp,
    isGirls,setisGirls,
    isBoys,setisBoys,
    genderStatus,setgenderStatus,
    maincategoryApp,setmaincategoryApp

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
