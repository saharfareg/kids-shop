import React from 'react'

export const a = () => {
  return (
    <div>
     {LeftProducts.genderStatus==='all' &&
      LeftProducts.allproductsApp.map(pr=>(
        <Product src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id}/>
      ))}
      {LeftProducts.isGirls && LeftProducts.genderStatus==='girls' &&
        LeftProducts.productGirlApp.map(pr=>(
          <Product src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id} />
        ))
      }
      {LeftProducts.isBoys && LeftProducts.genderStatus==='boys' &&
        LeftProducts.productBoyApp.map(pr=>(
          <Product src={pr.img} price={pr.price} subtitle={pr.subtitle} id={pr.id}/>
        ))
      }


    </div>
  )
}
