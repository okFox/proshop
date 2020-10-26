import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap' 
import Rating from '../components/Rating'
import product from '../products'
import products from '../products'

//destructure match off of props.  The id comes from the route in App.js
const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)
    return (
        <div>
           {product.name} 
        </div>
    )
}

export default ProductScreen
