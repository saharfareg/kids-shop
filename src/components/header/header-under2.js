import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import headerStyle  from './header.module.css'
            
export const HeaderUnder2=({onclick,title,src})=> {
  return (
    <>

    <Col   md={3} className={`${headerStyle['animate']} mx-auto text-center `}>
        <a href='#' title={title} onClick={onclick} className='text-decoration-none text-dark'>
            <div>
                <img src={src} alt='girls' className={`${headerStyle['img-header']}`}/>
            </div>
            <div>{title}</div>
        </a> 
    </Col>
    </>
  );
}
