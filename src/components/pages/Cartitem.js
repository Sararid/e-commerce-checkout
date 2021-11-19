import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";
import { Card } from "react-bootstrap";

export const isInCart = (product, cartItems) => {
    return cartItems.find((item) => item.id === product.id);
};
const Cart = (props) => {

    const { title, image, price, quantity, id, description, increase, decrease, removeProduct } = props;
    const product = { title, image, price, quantity, id, description }
    return (


        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={image}
                alt={title}
                className="singleProduct__image"
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>{price}</span>
                </Card.Subtitle>

                <div> Quantity: {quantity}</div>
                <div>
                    <button onClick={() => increase(product)}>

                        <BsPlusCircle />
                    </button>
                    {quantity === 1 && (
                        <button onClick={() => removeProduct(product)}>

                            <FiTrash />
                        </button>
                    )}
                    {quantity > 1 && (
                        <button onClick={() => decrease(product)}>
                            <BiMinusCircle />{" "}
                        </button>
                    )}
                </div>
            </Card.Body>
        </Card>

    );
};

export default Cart;
