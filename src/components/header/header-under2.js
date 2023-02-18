import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import headerStyle  from './header.module.css'
            
export const HeaderUnder2=({onclick,title,src})=> {
  return (
    <>

    <Col xs={2}  md={3} className={`${headerStyle['animate']} mx-auto text-center `}>
        <a href='#' title={title} onClick={onclick} className='text-decoration-none text-dark  text-center'>
            <figure >
                <img src={src} alt='girls' className={`${headerStyle['img-header']} img-fluid`}/>
                <figcaption className='mt-2 fs-8'>{title}</figcaption>
            </figure>
            
        </a> 
    </Col>
    </>
  );
}
