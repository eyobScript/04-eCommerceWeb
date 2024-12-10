import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom' // Import useParams hook
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Component/Product/Product.js'
import Message from '../Component/Message/Message.js'
import Loader from '../Component/Loader/Loader.js'
import { listProduct } from '../action/productActions.js'

const HomeScreen = () => {
  // Use useParams to get parameters from the URL
  const { keyword, pageNumber = 1 } = useParams()

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
