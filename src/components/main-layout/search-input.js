import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react'
import {MainContext} from './context/main-context'
import mainStyle  from './main.module.css'
//import {BsSearch} from "react-icons/bs";
//import {ProductsContext} from '../../context/products-context'
//import { Row } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

export const SearchInput=()=> {
  const allDataSearchInputFromMain=useContext(MainContext)
  //---------search product-----  
  const inputHandler=(e)=>{
      //allDataSearchInputFromMain.setSearchInput(e.target.value)
      var updatedList=[...allDataSearchInputFromMain.allProductsMain]
      updatedList=updatedList.filter(product=>{
        return product.subtitle.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      })
      allDataSearchInputFromMain.setSortedProducts(updatedList)
    }
  return (
    <>
      <InputGroup className="">
        <Form.Control className={`${mainStyle['input-custom']} `}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='نام کالا یا کد محصول وارد نمایید ...'
          onChange={inputHandler}
        />
        {/*
        <Button variant="outline-secondary" className={`${mainStyle['btn-custom']} `} id="button-addon1" >
          جستجو
        </Button>
        */}
      </InputGroup>
      
    </>
  );
}

