import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { LeftProducts } from './Left-poducts'
export const LeftSide = () => {
  return (
    <>
    <Container>
      <Row>
        <LeftProducts></LeftProducts>
      </Row>
    </Container>
    </>
  )
}
