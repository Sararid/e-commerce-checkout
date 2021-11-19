import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";
import { Card } from "react-bootstrap";

export const isInCart = (product, cartItems) => {
    return cartItems.find((item) => item.id === product.id);
};
const Cart = (product) => {

    const { title, image, price, quantity } = product;
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
                    <button>
                        {" "}
                        <BsPlusCircle />{" "}
                    </button>
                    {quantity === 1 && (
                        <button>
                            {" "}
                            <FiTrash />{" "}
                        </button>
                    )}
                    {quantity > 1 && (
                        <button>
                            <BiMinusCircle />{" "}
                        </button>
                    )}
                </div>
            </Card.Body>
        </Card>

    );
};

export default Cart;
