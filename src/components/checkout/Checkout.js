import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "../../styles/Layout/Checkout.scss";

import Payment from "./Payment";

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    return (
        <>
            <div className="checkout">

                <button className="checkout__btn">Go back to Shop</button>{" "}
            </div>
            <div className="checkout__summary">                <h1 className="checkout__title">Checkout Summary</h1>

                <h2 className="checkout__subtitle"> Total items: <span className="checkout__subtitle--item">{` ${itemCount}`}</span></h2>
                <h2 className="checkout__subtitle"> Amount to pay: <span className="checkout__subtitle--item">{` €${total}`}</span></h2>
            </div>
            <Payment />
        </>
    );
};

export default Checkout;
