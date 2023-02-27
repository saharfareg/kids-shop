import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from '../../input/input'
import { Button } from '../button/button'
export const Register = () => {
  return (
<>
    <Container>
        <Row>
        <Col md={8} className='mx-auto'>
            <h4 className='text-center'>ساخت حساب کاربری</h4>
            <p>
            قبلا ثبت نام کرده اید؟؟
            <Link to='/login' > وارد شوید </Link>
            </p>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">نام کاربری :  </label>
                    <Input element='input' type="text" className='form-control' id="exampleInputtext"   placeholder='نام خود را وارد نمایید'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">  ایمیل:</label>
                    <Input element='input' type="email" className='form-control' id="exampleInputEmail1"  placeholder='ایمیل خود را وارد نمایید' />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">رمز عبور:</label>
                    <Input element='input' type="password" className='form-control' id="exampleInputPassword1"  />
                    <div id="emailHelp" className="form-text">رمز مورد نظر باید حداقل 6 کاراکتر باشد</div>
                </div>
                <div className='text-center mb-3'>
                <Button type="submit" className="btn maincolor3 text-light w-100" children='عضویت'/>  
                </div>
            </form>
        </Col>
        </Row>
    </Container>
    
    </>
 
  )
}
