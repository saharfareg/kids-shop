import React from 'react'
import leftStyle from './left.module.css'
import { Link } from 'react-router-dom';
export const ProductHorizonal = ({src,price,subtitle,des,onclickprop,onMoreInfo,toLinkProp}) => {
  return (
    <>
<div className="card mb-3" >
  <div className="row g-0 align-items-center">
    <div className="col-3 text-center">
      <img src={src} className="img-fluid rounded-start" width='150'/>
      <button className={`${leftStyle[''] } maincolor3 text-light border-0 fs-8`} onClick={onclickprop}>افزودن به سبد خرید</button>
    </div>
    <div className="col-9 text-center">
      <div className="card-body">
        <h5 className="card-title">{subtitle}</h5>
        <p className='d-none d-md-block'>{des}</p>
        <p className="card-text"><small className="text-muted">{price}</small></p>
        <div className=''>
           <Link to={toLinkProp} className='text-decoration-none fColor3 fw-bold' onClick={onMoreInfo}>بیشتر جزییات</Link>
        </div>
        
      </div>
    </div>
  </div>
</div>
    </> 
    )
}
