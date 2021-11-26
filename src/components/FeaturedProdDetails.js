import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { ProductsContext } from "../context/products-context";
import { CartContext } from "../context/cart-context";
import { isInCart } from "./pages/Cart";
import "../../src/styles/Layout/Featured.scss";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const { productId } = useParams();
    const { data } = useContext(ProductsContext);
    const [product, setProduct] = useState([]);
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err);
            });
        setProduct(response.data);
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            console.log("eroor");
        };
    }, [productId]);

    const { id, title, price, category, image, description } = product;
    return (
        <div className="singleProduct__container">
            {Object.keys(product).length === 0 ? (
                <Spinner animation="border" />
            ) : (
                <li key={id} id={id} className="singleProduct">
                    <div className="singleProduct__card">
                        <img className="singleProduct__image" src={image} alt={title} />
                    </div>
                    <div className="singleProduct__subcard">
                        <h1 className="singleProduct__title">{title}</h1>
                        <span className="singleProduct__subtitle"> {category} </span>
                        <span className="singleProduct__price"> € {price}</span>
                        <p className="singleProduct__description"> {description}</p>
                        <p>{data.description} </p>
                        {!isInCart(product, cartItems) && (
                            <button
                                className="singleProduct__btn"
                                onClick={() => addProduct(product)}
                            >
                                Add to cart
                            </button>
                        )}
                        {isInCart(product, cartItems) && (
                            //if item is not in cart we display the add button
                            <button
                                className="singleProduct__btn"
                                onClick={() => increase(product)}
                            >
                                Add more
                            </button>
                        )}
                        <Link to="/cart">
                            {" "}
                            <button className="singleProduct__btn">Go to Cart</button>
                        </Link>
                    </div>
                </li>
            )}
        </div>
    );
};
export default ProductDetails;
