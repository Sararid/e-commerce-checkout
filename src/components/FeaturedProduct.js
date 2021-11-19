import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/Layout/FeaturedProduct.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const FeaturedProduct = (props) => {

    // products is an array of prods, we have to map as usuall in order to render the product 

    const { title, image, price, history, id, description, category } = props;
    const product = { title, image, price, id, description, category };
    const { addProduct, cartItems, increase } = useContext(CartContext);
    // const itemInCart = isInCart(product, cartItems);


    return (
        <ul key={id}>

            <li key={id} id={id} className="singleProduct">

                <Link to={`/product/${id}`}> <Card style={{ width: '18rem' }} >
                    <Card.Img variant='top' src={image} alt={title} className="singleProduct__image" />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>

                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span>€ {price}</span>
                            <span>€ {category}</span>
                        </Card.Subtitle>

                        <Button variant="primary" >View item</Button>

                    </Card.Body>
                </Card>
                </Link> </li>
        </ul>)


}

export default FeaturedProduct;
