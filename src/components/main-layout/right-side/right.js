import React, { useContext } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import rightStyle from './right.module.css'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import {ProductsContext} from '../../../context/products-context'

export const RightSide = () => {
  const alldataRightSide=useContext(ProductsContext)
  const collapsehandler=()=>{
    alldataRightSide.setbtncollapseRightSide(!alldataRightSide.btncollapseRightSide)
    alldataRightSide.setcollapseRightSide(!alldataRightSide.collapseRightSide)
  }
  return (
    <>
      
      <Container>
        <Row>
        <h3 className="fs-6 text-center">جستجوی پیشرفته</h3>
        </Row>
        <Row>
          <Col className={`${rightStyle['filter-data']} }`}>
            <Row className={`${rightStyle['row-container']} `}>
              <span className='width-auto'>دسته‌بندی نتایج</span>
              <i className='width-fit-content' onClick={collapsehandler}>
                {alldataRightSide.btncollapseRightSide ?<BsFillCaretUpFill/> : <BsFillCaretDownFill/>} 
              </i>  
            </Row>
            {alldataRightSide.collapseRightSide && (
              <>
              <Row>
              <Col className={`${rightStyle['items']} }`}>
                <lable className={`${rightStyle['lable']} }`}>
                  <input type='checkbox' className='me-2 check-box-color'/>
                  پوشاک
                      <lable className={`${rightStyle['lable']} }`}>
                      <input type='checkbox' className='me-2 check-box-color'/>
                      پسرانه
                    </lable>
                    <lable className={`${rightStyle['lable']} }`}>
                      <input type='checkbox' className='me-2 check-box-color'/>
                      دخترانه
                    </lable>
                </lable>
                <lable className={`${rightStyle['lable']} }`}>
                  <input type='checkbox' className='me-2 check-box-color'/>
                  کفش
                </lable>
                <lable className={`${rightStyle['lable']} }`}>
                  <input type='checkbox' className='me-2 check-box-color'/>
                  اکسسوری
                </lable>
                <lable className={`${rightStyle['lable']} }`}>
                  <input type='checkbox' className='me-2 check-box-color'/>
                  جنس
                </lable>
              </Col>
            </Row>
              </>
            )
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
