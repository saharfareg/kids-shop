import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import {LeftSide} from './left-side/left.js'
import {RightSide} from './right-side/right.js'
import { Loading } from '../loading/loading.js'
import { useContext } from 'react';
import {ProductsContext} from '../../context/products-context'
export const MainLayout = () => {
    const alldataMainLayout=useContext(ProductsContext)
  return (
    <>
    {}
    <Container fluid className={alldataMainLayout.isThemeDark ? 'back-light py-5' : 'back-dark py-5'}>
        <Row>
        {alldataMainLayout.isLoading && <Loading />}
            <Col className='col-11 mx-auto'>
                <Row>
                    <Col md={3}>
                        <RightSide></RightSide>
                    </Col>
                    <Col md={9}>
                        <LeftSide></LeftSide>
                    </Col>
                </Row>
            </Col>
            
        </Row>
    </Container>

    </>
  )
}
