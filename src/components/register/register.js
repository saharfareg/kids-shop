import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from '../input/input'
import { Button } from '../button/button'
import styles from '../login/login.module.css'
export const Register = () => {
  return (
<>
    <Container className='mt-5 pt-5'>
        <Row>
        <Col md={8} className={`${styles['container']} mx-auto my-5 px-3 py-5 px-md-5 `}>
            <h4 className='text-center fw-bold mb-5'>ساخت حساب کاربری</h4>
            <p>
            قبلا ثبت نام کرده اید؟؟
            <Link to='/login' className='fColor3 text-decoration-none ms-2 fw-bolder' > وارد شوید </Link>
            </p>
            <form>
                <div className="mb-3">
                    <label  htmlFor="exampleInputtext" className="form-label">نام کاربری :  </label>
                    <Input element='input' type="text" className='form-control' id="exampleInputtext"   placeholder='نام خود را وارد نمایید'/>
                </div>
                <div className="mb-3">
                    <label  htmlFor="exampleInputEmail1" className="form-label">  ایمیل :</label>
                    <Input element='input' type="email" className='form-control' id="exampleInputEmail1"  placeholder='ایمیل خود را وارد نمایید' />
                </div>
                <div className="mb-3">
                    <label  htmlFor="exampleInputPassword1" className="form-label">رمز عبور : </label>
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
