import Toast from 'react-bootstrap/Toast';
import {CloseButton} from 'react-bootstrap';
import '../../App.css'
import toastStyle from './toast.module.css'
import {ProductsContext} from '../../context/products-context'
import { useContext } from 'react';
export const MyToast =()=> {
  const alldataMyToast =useContext(ProductsContext)
  const btncloseHandler=()=>{
    alldataMyToast.setisShowToast(false)
  }
  return (
    <>
    {alldataMyToast.isShowToast && (
      <Toast className={`${toastStyle['toast-custom']} d-block  maincolor3`}>
      <Toast.Body className='d-flex justify-content-around align-items-center '>
          <p className=''>محصول مورد نظر به سبد خرید اضافه شد.</p>
          <CloseButton aria-label="Hide" className={`${toastStyle['btn-toast-custom']} `} onClick={btncloseHandler}/>
      </Toast.Body>
    </Toast>
    )}
    </>
  );
}
