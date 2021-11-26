import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";

export const isInCart = (product, cartItems) => {
    return cartItems.find((item) => item.id === product.id);
};
const Cart = (props) => {
    const {
        title,
        image,
        price,
        quantity,
        id,
        description,
        increase,
        decrease,
        removeProduct,
    } = props;
    const product = { title, image, price, quantity, id, description };
    return (
        <>
            <div className="cart__container--card">
                <h2> {title} </h2>
                <img src={image} alt={title} className="cart__container--img" />
                <div className="cart__container--title">
                    {" "}
                    <h3>€{price}</h3>
                </div>
                <div className="cart__container--qty">
                    <h3> Quantity: {quantity}</h3>
                    <div>
                        {" "}
                        <button onClick={() => increase(product)}>
                            <BsPlusCircle className="cart__container--icon" />
                        </button>
                        {quantity === 1 && (
                            <button onClick={() => removeProduct(product)}>
                                <FiTrash className="cart__container--icon" />
                            </button>
                        )}
                        {quantity > 1 && (
                            <button onClick={() => decrease(product)}>
                                <BiMinusCircle className="cart__container--icon" />{" "}
                            </button>
                        )}
                    </div>{" "}
                </div>
            </div>
        </>
    );
};

export default Cart;
