import React, { useContext, useState ,useRef } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import rightStyle from './right.module.css'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import {MainContext} from '../context/main-context'
import Accordion from 'react-bootstrap/Accordion';
import datas from '../../../data.json'
export const RightSide = () => {

  const checkboxRef = useRef();
  const RightSideContex =useContext(MainContext)

  //const[checkedCkb,setCheckedCkb]=useState(false)
const [ischecked, setIsChecked] = useState(false);
const handleChangeChk=(category,maincategory,subcategory)=>{
  console.log(checkboxRef.current.checked)
  console.log(category,maincategory,subcategory)
  setIsChecked(!checkboxRef.current.checked)
 if(ischecked){
  RightSideContex.allProductsMain.filter(product=>{
      RightSideContex.setSortedProducts(RightSideContex.allProductsMain.filter(product=>product.category=== category && product.maincategory=== maincategory && product.subcategory=== subcategory))
      console.log(RightSideContex.sortedProducts)
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
                  <input className='me-2' type="checkbox" id="option1"    onChange={handleChangeChk.bind(this,'girls','all')}/><label for="option1"> دخترانه</label>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0'><label><input type="checkbox" class="subOption"   onChange={handleChangeChk.bind(this,'girls','clothes')}/> پوشاک</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" class="subOption"  ref={checkboxRef}  onChange={handleChangeChk.bind(this,'girls','shoes','')}/> کفش</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" class="subOption"  ref={checkboxRef} onChange={handleChangeChk.bind(this,'girls','clothes','pants')}/> شلوار</label></li>
                  </ul>
                </li>
                <li className='list-group-item border-0'>
                  <input className='me-2' type="checkbox" id="option2"   onChange={handleChangeChk.bind(this,'boys','all')}/><label for="option2"> پسرانه</label>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item border-0'><label>
                      <input type="checkbox" class="subOption"   onChange={handleChangeChk.bind(this,'boys','clothes')}/>
                       پوشاک</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" class="subOption" ref={checkboxRef}  onChange={handleChangeChk.bind(this,'boys','shoes','')}/> کفش</label></li>
                    <li className='list-group-item border-0'><label><input type="checkbox" class="subOption" ref={checkboxRef}  onChange={handleChangeChk.bind(this,'boys','clothes','pants')}/> شلوار</label></li>
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
