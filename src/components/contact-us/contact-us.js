import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Input } from '../input/input'
import { Button } from '../button/button'
import styles from './contact-us.module.css'
export const ContactUs = () => {
  return (
    <Container className='mt-5 pt-5'>
    <Row>
        <Col md={8}  className={`${styles['container']} mx-auto my-5 px-3 py-5 px-md-5`}>
            <h4 className='text-center fw-bold mb-5'> ارتباط با ما</h4>
            <p className='text-center fw-bold'>
            نظرات یا انتقادات خود را با ما در میان بگذارید
            </p>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"> نام و نام خانوادگی : </label>
                    <Input element='input' type="text" className="form-control" id="exampleInputName" placeholder='نام خود را وارد نمایید' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> آدرس ایمیل : </label>
                    <Input element='input' type="email" className="form-control" id="exampleInputEmail1" placeholder='ایمیل خود را وارد نمایید' />
                </div>
       
                <div className="mb-3">
                    <label htmlFor="exampleInputTel" className="form-label"> شماره تماس: </label>
                    <Input element='input' type="tel" className="form-control" id="exampleInputTel"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputtextarea" className="form-label"> متن خود را وارد نمایید : </label>
                    <Input element='textarea'  className="form-control" id="exampleInputtextarea"/>
                </div>
                <div className='text-center mb-3'>
                <Button className="btn maincolor3 text-light w-100" type="submit" children='ارسال' />
                </div>
               
            </form>
        </Col>
    </Row>
</Container>
  )
}
