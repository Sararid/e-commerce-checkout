import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/Layout/FeaturedProduct.scss';

const FeaturedProduct = () => {
    const products = useSelector((state) => state.allProducts.products)
    // products is an array of prods, we have to map as usuall in order to render the product 
    const renderList = products.map((item) => {
        const { id, title, price, category, image } = item;
        return (<ul key={id}>



            <li key={id} id={id} className="singleProduct">

                <Link to={`/product/${id}`}> <Card style={{ width: '18rem' }} >
                    <Card.Img variant='top' src={image} alt={title} className="singleProduct__image" />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>

                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span>€ {price}</span>
                            <span>€ {category}</span>
                        </Card.Subtitle>

                        <Button variant="primary">{"Add to cart"}</Button>

                    </Card.Body>
                </Card>
                </Link> </li>
        </ul>)
    })
    return (
        <>{renderList}</>
    )
}

export default FeaturedProduct;
