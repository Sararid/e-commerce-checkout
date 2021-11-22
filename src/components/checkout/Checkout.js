import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import '../../styles/Layout/Checkout.scss';
import StripeCheckout from './stripeCheckout/StripeCheckout';



const Checkout = () => {


    const { itemCount, total } = useContext(CartContext)
    return (
        <>
            <div className="checkout">
                <h1 className="checkout__title">Checkout Summary</h1>
                <h2 className="checkout__subtitle">{`Total Items: ${itemCount}`}</h2>
                <h2 className="checkout__subtitle">{`Amount to pay: €${total}`}</h2>
                <StripeCheckout />
                <button className="checkout__btn"></button>
            </div>
        </>
    )
}

export default Checkout;
