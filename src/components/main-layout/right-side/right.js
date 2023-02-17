import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import rightStyle from './right.module.css'

export const RightSide = () => {
  return (
    <>
      <h3 className="fs-6 text-center">جستجوی پیشرفته</h3>
      <Container>
        <Row>
          <Col>
          <ul className="list-group">
            <li className="list-group-item 'list-group-item-action' bg-transparent "><a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  پوشاک</a>
              <ul className="list-group">
                <li className="list-group-item 'list-group-item-action bg-transparent py-0 border-0">
                  <a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  پسرانه</a>
                </li>
                <li className="list-group-item 'list-group-item-action bg-transparent py-0 border-0">
                  <a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  دخترانه</a>
                </li>
                <span className={`${rightStyle['span-ul-close']} ${rightStyle['span-ul']}`}></span>
              </ul>
            </li>
            <li className="list-group-item  bg-transparent "><a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  کفش</a>
              <ul className="list-group">
                <li className="list-group-item 'list-group-item-action bg-transparent py-0 border-0">
                  <a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  پسرانه</a>
                </li>
                <li className="list-group-item 'list-group-item-action bg-transparent py-0 border-0">
                  <a href='#' className="list-group-item-action bg-transparent border-0 text-decoration-none">  دخترانه</a>
                </li>
                <span className={`${rightStyle['span-ul-close']} ${rightStyle['span-ul']}`}></span>
              </ul>
            </li>
          </ul>
          <span className={`${rightStyle['span-ul-close']} ${rightStyle['span-ul']}`}></span>
          </Col>
        </Row>
      </Container>
    </>
  )
}
