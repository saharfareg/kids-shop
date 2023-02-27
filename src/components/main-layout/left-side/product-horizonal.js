import React from 'react'

export const ProductHorizonal = ({src,price,subtitle,des,onclickprop,onMoreInfo,toLinkProp}) => {
  return (
    <>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={src} class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{subtitle}</h5>
        <p class="card-text">{des}</p>
        <p class="card-text"><small class="text-muted">{price}</small></p>
        <button className={`bg-dark border-0 bg-transparent text-white fs-8`} onClick={onclickprop}>افزودن به سبد خرید</button>
      </div>
    </div>
  </div>
</div>
    </> 
    )
}
