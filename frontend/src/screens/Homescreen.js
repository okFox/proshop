import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Homescreen = () => {
    const [products, setProducts] = useState([])

    //loads when component loads
    useEffect(() => {
        //new function in order to make it async/await-able
        const fetchProducts = async () => {
            //destructure data off of res object
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    }, []) //place dependancies in array.  anying you want to fire useEffect off when it changes
    
    return (
        <>
           <h1>Latest Products</h1>
           <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
           </Row>
        </>
    )
}

export default Homescreen
