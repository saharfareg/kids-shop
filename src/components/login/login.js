import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from '../../input/input'
import { Button } from '../button/button'

export const Login = () => {
  return (
    <>
    <Container>
        <Row>
            <Col md={8} className='mx-auto'>
                <h4 className='text-center'>ورود به حساب کاربری</h4>
                <p>
                کاربر جدید هستید؟؟
                <Link to='/register' >ثبت نام </Link>
                </p>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> نام کاربری یا ایمیل:</label>
                        <Input element='input' type="email" className="form-control" id="exampleInputEmail1" placeholder='ایمیل خود را وارد نمایید' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">رمز عبور:</label>
                        <Input element='input' type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className='text-center mb-3'>
                    <Button className="btn maincolor3 text-light w-100" type="submit" children='ورود' />
                    </div>
                    <div className="mb-3 form-check ">
                        <Input element='input'  type="checkbox" className="form-check-input float-none" id="exampleCheck1"/>   
                        <label className="form-check-label ms-4" for="exampleCheck1"> مرا به خاطر داشته باش</label>
                    </div>
                    <Button className='' href='#' children='رمز عبور را فراموش کرده اید?'/>
                </form>
            </Col>
        </Row>
    </Container>
    
    </>
 
  )
}
