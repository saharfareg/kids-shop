import {NotFound} from './components/page-not-found/not-found'
import {MoreInfo} from './components/main-layout/more-info-product/more-info'
import {AboutUs} from './components/about-us/about-us'
import {ContactUs} from './components/contact-us/contact-us'
import {MainLayout} from './components/main-layout/main-layout'
import {HomePage} from './components/home-page/home-page'
import { Register } from './components/register/register'
import { Login } from './components/login/login' 
export let allRoutes = [
    { path:'/' , element:<HomePage/>},
    { path:'/contact-us', element:<ContactUs/>},
    { path:'/about-us/*', element:<AboutUs/> , children:[
      {path:'dashboard', element: <p> به داشبورد خوش آمدید</p>}
    ]},
    { path:'/products' , element:<MainLayout/>},
    { path:'/product/:productID', element:<MoreInfo/>},
    { path:'*' , element:<NotFound/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>}
  ]