import './App.css';
//import axios from 'axios';
import {Header} from './components/header/header'
import {MainLayout} from './components/main-layout/main-layout'
import {ProductsContext} from './context/products-context'
import { Children, useState } from 'react';
//import { API_URL } from './constants/constants';
import {Footer} from './components/footer/footer'
import { MyToast } from './components/toast/toast';
import { Route, Routes, useRoutes } from 'react-router-dom';
import {NotFound} from './components/page-not-found/not-found'
import {MoreInfo} from './components/main-layout/more-info-product/more-info'
//import datas from './data.json'
import {AboutUs} from './components/about-us/about-us'
import {ContactUs} from './components/contact-us/contact-us'
import {allRoutes} from './routes'
function App() {
 
  const[isShowbag,setIsShowbag]=useState(false)
  const[basket,setBasket]=useState([])
  //------ loading / themeDrak -----------
  const [isLoading, setIsLoading] = useState(true)
  const [isThemeDark,setisThemeDark] = useState(true)
  //------------- btn / collapse ----------
  const[btnhambueger,setbtnhambueger]=useState(true)
  const[showcollapse,setshowcollapse]=useState(false)
  const[btncollapseRightSide,setbtncollapseRightSide]=useState(false)
  const[collapseRightSide,setcollapseRightSide]=useState(true)
  
 
  const [isShowToast,setIsShowToast]=useState(false)

  const alldata={
    isShowbag,setIsShowbag,
    basket,setBasket,
    btnhambueger,setbtnhambueger,
    showcollapse,setshowcollapse,
    btncollapseRightSide,setbtncollapseRightSide,
    collapseRightSide,setcollapseRightSide,
    
    isLoading, setIsLoading,
    isThemeDark,setisThemeDark,
    isShowToast,setIsShowToast
  }
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
  return (
 <>
<ProductsContext.Provider value={alldata}>
    <Header></Header>
    {routes}
    {/* <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/about-us/*' element={<AboutUs/>}>
          <Route path='dashboard' element={<p> به داشبورد خوش آمدید</p>}/>
        </Route>
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
