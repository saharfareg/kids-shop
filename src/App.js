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
import {Footer} from './components/footer/footer'
import { MyToast } from './components/toast/toast';
function App() {
  //const[productGirlApp,setproductGirlApp]=useState([...productGirl])
  //const[productBoyApp,setproductBoyApp]=useState([...productBoy])
  //const[allproductsApp,setallproductsApp]=useState([...productGirl,...productBoy])

  const[productGirlApp,setproductGirlApp]=useState([])
  const[productBoyApp,setproductBoyApp]=useState([])

  const[allproductsApp,setallproductsApp]=useState([])
  const[isShowbag,setisShowbag]=useState(false)
  const [isShowToast,setisShowToast]=useState(false)

  const[btnhambueger,setbtnhambueger]=useState(true)
  const[showcollapse,setshowcollapse]=useState(false)
  const[btncollapseRightSide,setbtncollapseRightSide]=useState(false)
  const[collapseRightSide,setcollapseRightSide]=useState(true)
  const[searchInput,setsearchInput]=useState('')

  const[isGirls,setisGirls]=useState(false)
  const[isBoys,setisBoys]=useState(false) 
  
  const[genderStatus,setgenderStatus]=useState('all')
  const[basket,setbasket]=useState([])
  const [isLoading, setIsLoading] = useState(true)
  //---------  category -----
  const[allCategoriesApp,setallCategoriesApp]=useState([])
  //----------- maincategory ------------------
  const maincategoryRepeated=allproductsApp.map(pr=>pr.maincategory)
    console.log(maincategoryRepeated) 
  const allMaincategories=['all',...new Set(maincategoryRepeated)]
    console.log(allMaincategories)
  const[allMaincategoriesApp,setallMaincategoriesApp]=useState(allMaincategories) 
    console.log(allMaincategoriesApp)

  //----------- subcategory -----
  const[allSubCategoriesApp,setallSubCategoriesApp]=useState([])
  //----------------------
  const loadProducts=()=>{
    axios.get(`${API_URL}/products`).then((res) =>{
      setIsLoading(true)
    setallproductsApp(res.data)
    setIsLoading(false)
    })
  }
    useEffect(()=>{
      loadProducts()
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

    isShowbag,setisShowbag,
    basket,setbasket,
    btnhambueger,setbtnhambueger,
    showcollapse,setshowcollapse,
    btncollapseRightSide,setbtncollapseRightSide,
    collapseRightSide,setcollapseRightSide,
    searchInput,setsearchInput,
    isShowToast,setisShowToast,
    isLoading, setIsLoading
  }

  return (
 <>
 <ProductsContext.Provider value={alldata}>
    <Header></Header>
    <MainLayout></MainLayout>
    <Footer/>
    <MyToast/>
 </ProductsContext.Provider>

 </>
  );
}

export default App;
