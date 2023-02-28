import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from '../input/input'
import { Button } from '../button/button'
import styles from './login.module.css'
export const Login = () => {
  return (
    <>
    <Container className='mt-5 pt-5'>
        <Row>
            <Col md={8}  className={`${styles['container']} mx-auto my-5 px-3 py-5 px-md-5`}>
                <h4 className='text-center fw-bold mb-5'>ورود به حساب کاربری</h4>
                <p>
                کاربر جدید هستید؟؟
                <Link to='/register' className='fColor3 text-decoration-none ms-2 fw-bolder'>ثبت نام کنید </Link>
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"> نام کاربری یا ایمیل : </label>
                        <Input element='input' type="email" className="form-control" id="exampleInputEmail1" placeholder='ایمیل خود را وارد نمایید' />
                    </div>
           
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">رمز عبور : </label>
                        <Input element='input' type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className='text-center mb-3'>
                    <Button className="btn maincolor3 text-light w-100" type="submit" children='ورود' />
                    </div>
                    <div className="mb-3  form-check ">
                        <Input element='input'  type="checkbox" className="form-check-input float-none " id="exampleCheck1"/>   
                        <label className="form-check-label me-4" htmlFor="exampleCheck1"> مرا به خاطر داشته باش</label>
                    </div>
                    <Button className='fColor3 text-decoration-none ms-2 fw-bolder' href='#' children='رمز عبور را فراموش کرده اید؟'/>
                </form>
            </Col>
        </Row>
    </Container>
    
    </>
 
  )
}
