import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../styles/Layout/FeaturedProduct.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { isInCart } from './pages/Cart';
import { ProductsContext } from "../context/products-context";

const FeaturedProduct = (props) => {

    // products is an array of prods, we have to map as usuall in order to render the product 

    const { title, image, price, id, description, category } = props;
    const product = { title, image, price, id, description, category };
    const { addProduct, cartItems, increase } = useContext(CartContext);

    // const itemInCart = isInCart(product, cartItems);


    return (
        <ul key={id}>

            <li key={id} id={id} className="singleProduct">

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant='top' src={image} alt={title} className="singleProduct__image" />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>
                        <span> {category}</span>
                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span>€ {price}</span>

                        </Card.Subtitle>

                        <Link to={`/product/${id}`}>    <Button variant="primary" style={{ width: 200 }}>View item</Button></Link>

                        { // we check fist if product is in cart, if not we add it to cart with the reducer addProduct
                            !isInCart(product, cartItems) &&
                            //if item is not in cart we display the add button
                            < Button style={{ width: 200 }} className="is-black nomad-btn" onClick={() => addProduct(product)}>Add to cart</Button>
                        }
                        {
                            isInCart(product, cartItems) &&
                            //if item is not in cart we display the add button
                            < Button style={{ width: 200 }} variant="dark" className="is-black nomad-btn">Add more</Button>
                        }
                    </Card.Body>
                </Card>
            </li>
        </ul >)


}

export default FeaturedProduct;
