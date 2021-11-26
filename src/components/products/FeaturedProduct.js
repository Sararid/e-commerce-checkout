import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/products/FeaturedProduct.scss"
import "../../styles/products/Featured.scss";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../cart/Cart";


const FeaturedProduct = (props) => {
    const { title, image, price, id, description, category } = props;
    const product = { title, image, price, id, description, category };
    const { addProduct, cartItems } = useContext(CartContext);

    return (
        <ul key={id} className="singleProduct__container">
            <li key={id} id={id} className="singleProduct">
                <div className="singleProduct__card">
                    <img src={image} alt={title} className="singleProduct__image" />

                    <h1 className="singleProduct__title">{title}</h1>
                    <span className="singleProduct__category"> {category}</span>

                    <span className="singleProduct__price">€ {price}</span>

                    <Link to={`/product/${id}`}>
                        <button className="singleProduct__btn">View item</button>
                    </Link>

                    {!isInCart(product, cartItems) && (
                        <button
                            className="singleProduct__btn"
                            onClick={() => addProduct(product)}
                        >
                            Add to cart
                        </button>
                    )}
                    {isInCart(product, cartItems) && (
                        <button className="singleProduct__btn">Add more</button>
                    )}

                </div>
            </li>
        </ul>
    );
};

export default FeaturedProduct;
