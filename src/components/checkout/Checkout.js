import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "../../styles/checkout/Checkout.scss";
import { Link } from "react-router-dom";
import Payment from "./Payment";

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    return (
        <>
            <section className="container">
                <div className="container__checkout">

                    <div className="checkout">
                        <Link to="/cart">
                            <button className="checkout__btn">Go back to cart</button>
                        </Link>
                    </div>
                    <div className="checkout__summary">
                        <h1 className="checkout__title">Checkout Summary</h1>
                        <h2 className="checkout__subtitle">
                            Total items:
                            <span className="checkout__subtitle--item">{` ${itemCount}`}</span>
                        </h2>
                        <h2 className="checkout__subtitle">
                            Amount to pay:
                            <span className="checkout__subtitle--item">{` €${total}`}</span>
                        </h2>
                    </div>
                </div>
                <Payment />
            </section>
        </>
    );
};

export default Checkout;
