import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../styles/Layout/FeaturedProduct.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { isInCart } from './pages/Cart';
import { ProductsContext } from "../context/products-context";
import '../../src/styles/Layout/Featured.scss'
const FeaturedProduct = (props) => {

    // products is an array of prods, we have to map as usuall in order to render the product 

    const { title, image, price, id, description, category } = props;
    const product = { title, image, price, id, description, category };
    const { addProduct, cartItems } = useContext(CartContext);

    // const itemInCart = isInCart(product, cartItems);


    return (
        <ul key={id} className="singleProduct__container">

            <li key={id} id={id} className="singleProduct">

                <Card style={{ width: '15rem' }} className="singleProduct__card">
                    <img src={image} alt={title} className="singleProduct__image" />
                    <Card.Body>

                        <Card.Title>{title}</Card.Title>
                        <span className="singleProduct__category"> {category}</span>
                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span className="singleProduct__price">€ {price}</span>

                        </Card.Subtitle>

                        <Link to={`/product/${id}`}>
                            <button className="singleProduct__btn" >View item</button></Link>

                        { // we check fist if product is in cart, if not we add it to cart with the reducer addProduct
                            !isInCart(product, cartItems) &&
                            //if item is not in cart we display the add button
                            < button className="singleProduct__btn" onClick={() => addProduct(product)}>Add to cart</button>
                        }
                        {
                            isInCart(product, cartItems) &&
                            //if item is not in cart we display the add button
                            < button className="singleProduct__btn" >Add more</button>
                        }
                    </Card.Body>
                </Card>
            </li>
        </ul >)


}

export default FeaturedProduct;
