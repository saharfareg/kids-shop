import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const HeaderUnder1=()=> {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='نام کالا یا کد محصول وارد نمایید ...'
        />
        <Button variant="outline-secondary" id="button-addon1">
          جستجو
        </Button>
      </InputGroup>
    </>
  );
}

