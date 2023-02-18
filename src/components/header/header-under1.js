import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import headerStyle  from './header.module.css'
export const HeaderUnder1=()=> {
  return (
    <>
      <InputGroup className="">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='نام کالا یا کد محصول وارد نمایید ...'
        />
        <Button variant="outline-secondary" className={`${headerStyle['button-form']}`} id="button-addon1">
          جستجو
        </Button>
      </InputGroup>
    </>
  );
}

