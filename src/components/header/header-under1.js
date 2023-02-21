import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import headerStyle  from './header.module.css'
import {BsSearch} from "react-icons/bs";
import { useContext } from 'react'
import {ProductsContext} from '../../context/products-context'

export const HeaderUnder1=()=> {
  const alldataHeaderUnder1= useContext(ProductsContext)



    const inputHandler=(e)=>{
      alldataHeaderUnder1.setsearchInput(e.target.value)

    }
    const btnHandler=()=>{
      console.log('btn')
    }
    
  return (
    <>
      <InputGroup className="">
        <Form.Control className={`${headerStyle['input-custom']} `}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='نام کالا یا کد محصول وارد نمایید ...'
          onChange={inputHandler}
        />
        <Button variant="outline-secondary" className={`${headerStyle['btn-custom']} `} id="button-addon1" onClick={btnHandler}>
          جستجو
        </Button>
      </InputGroup>
      
    </>
  );
}

