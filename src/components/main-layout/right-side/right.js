import React, { useContext, useState ,useRef } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import rightStyle from './right.module.css'
import {MainContext} from '../context/main-context'
import Accordion from 'react-bootstrap/Accordion';
//import datas from '../../../data.json'
//import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";

export const RightSide = () => {
  const RightSideContex =useContext(MainContext)

  const[ischecked, setIsChecked] = useState(true);
  const handleChangeChk=(category,maincategory,subcategory)=>{
    //console.log(category,maincategory,subcategory)
    setIsChecked(!ischecked)    
     if(ischecked){
      RightSideContex.allProductsMain.filter(product=>{
          if(product.category=== category && product.maincategory=== maincategory){
              RightSideContex.setSortedProducts(RightSideContex.allProductsMain.filter(product=>product.category=== category && product.maincategory=== maincategory ))
          }else{
              RightSideContex.setSortedProducts(RightSideContex.allProductsMain.filter(product=>product.category=== category )) 
          }
      })
        }else{
          RightSideContex.setSortedProducts(RightSideContex.allProductsMain)
        }
        
    }
  return (
    <>
      <Container>
        <Row>
        <h3 className="fs-6 text-center ">جستجوی پیشرفته</h3>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0"  >
              <Accordion.Item eventKey="0" >
              <Accordion.Header className={`${rightStyle['accordion-header']} text-body`}>دسته‌بندی نتایج</Accordion.Header>
              <Accordion.Body className={`${rightStyle['items']} text-body`}>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item border-0'>
                  <input className='me-2' type="checkbox" id="option1"  onChange={handleChangeChk.bind(this,'girls')}/><label htmlFor="option1"> دخترانه</label>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0'><label><input type="checkbox" className="subOption"   onChange={handleChangeChk.bind(this,'girls','clothes')}/> پوشاک</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" className="subOption"    onChange={handleChangeChk.bind(this,'girls','shoes')}/> کفش</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" className="subOption"   onChange={handleChangeChk.bind(this,'girls','clothes','pants')}/> شلوار</label></li>
                  </ul>
                </li>
                <li className='list-group-item border-0'>
                  <input className='me-2' type="checkbox" id="option2"   onChange={handleChangeChk.bind(this,'boys')}/><label htmlFor="option2"> پسرانه</label>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0'><label>
                      <input type="checkbox" className="subOption"   onChange={handleChangeChk.bind(this,'boys','clothes')}/>
                       پوشاک</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" className="subOption"  onChange={handleChangeChk.bind(this,'boys','shoes')}/> کفش</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" className="subOption"   onChange={handleChangeChk.bind(this,'boys','clothes','pants')}/> شلوار</label></li>
                  </ul>
                </li>
              </ul>
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}
