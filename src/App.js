import './App.css';
//import axios from 'axios';
//import { API_URL } from './constants/constants';
import {Header} from './components/header/header'
import {ProductsContext} from './context/products-context'
import { useState } from 'react';
import {Footer} from './components/footer/footer'
import { MyToast } from './components/toast/toast';
import {useRoutes } from 'react-router-dom';
import {allRoutes} from './routes'
//import { Route, Routes, useRoutes } from 'react-router-dom';
//import {NotFound} from './components/page-not-found/not-found'
//import {MoreInfo} from './components/main-layout/more-info-product/more-info'
//import {MainLayout} from './components/main-layout/main-layout'
//import {AboutUs} from './components/about-us/about-us'
//import {ContactUs} from './components/contact-us/contact-us'
//import datas from './data.json'


function App() {
 
  //------ loading / themeDrak -------------------------
  const [isLoading, setIsLoading] = useState(true)
  const [isThemeDark,setisThemeDark] = useState(false)
  //------------- btnToggle header / collapse ----------
  const[btnhambueger,setbtnhambueger]=useState(true)
  const[showcollapse,setshowcollapse]=useState(false)
  //------ Basket --------------------------------------
  const[isShowbag,setIsShowbag]=useState(false)
  const[basket,setBasket]=useState([])
  const[isProductInBasket,setIsProductInBasket]=useState(false)
  const [isShowToast,setIsShowToast]=useState(false)
  //-------------
  const[basketTotalPrice,setBasketTotalPrice]=useState(0)
  //--------- all states in context----------------------
  const alldata={
    btnhambueger,setbtnhambueger,
    showcollapse,setshowcollapse,
    isLoading, setIsLoading,
    isThemeDark,setisThemeDark,
    isShowToast,setIsShowToast,
    isProductInBasket,setIsProductInBasket,
    isShowbag,setIsShowbag,
    basket,setBasket,
    basketTotalPrice,setBasketTotalPrice
  }
  //---------- site routing  ----
/*let routes=useRoutes([
  { path:'/' , element:<MainLayout/>},
  { path:'/contact-us', element:<ContactUs/>},
  { path:'/about-us/*', element:<AboutUs/> , Children:[
    {path:'dashboard', element:<p> به داشبورد خوش آمدید</p>}
  ]},
  { path:'/products' , element:<MainLayout/>},
  { path:'/product/:productID', element:<MoreInfo/>},
  { path:'*' , element:<NotFound/>}
])*/
let routes=useRoutes(allRoutes)
//-------------------------------------
  return (
 <>
<ProductsContext.Provider value={alldata}>
    <Header></Header>
    {routes}
  {/*<Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/about-us/*' element={<AboutUs/>}/>
          <Route path='/products' element={<MainLayout/>}/>
          <Route path='/product/:productID' element={<MoreInfo/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    <Footer/>
    <MyToast/>
 </ProductsContext.Provider>
 </>
  );
}

export default App;
