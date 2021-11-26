import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/Layout/FeaturedProduct.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { isInCart } from './pages/Cart';
import '../../src/styles/Layout/Featured.scss';

const FeaturedProduct = (props) => {

    const { title, image, price, id, description, category } = props;
    const product = { title, image, price, id, description, category };
    const { addProduct, cartItems } = useContext(CartContext);

    return (
        <ul key={id} className="singleProduct__container">

            <li key={id} id={id} className="singleProduct">

                <Card className="singleProduct__card">
                    <img src={image} alt={title} className="singleProduct__image" />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>
                        <span className="singleProduct__category"> {category}</span>
                        <Card.Subtitle >
                            <span className="singleProduct__price">€ {price}</span>

                        </Card.Subtitle>

                        <Link to={`/product/${id}`}>
                            <button className="singleProduct__btn" >View item</button></Link>

                        {
                            !isInCart(product, cartItems) &&

                            < button className="singleProduct__btn" onClick={() => addProduct(product)}>Add to cart</button>
                        }
                        {
                            isInCart(product, cartItems) &&
                            < button className="singleProduct__btn" >Add more</button>
                        }
                    </Card.Body>
                </Card>
            </li>
        </ul >)


}

export default FeaturedProduct;
