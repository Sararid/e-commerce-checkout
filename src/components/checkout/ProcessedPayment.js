import React from 'react';
import '../../styles/checkout/ProcessPayment.scss';
import { useHistory } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../context/cart-context';
const ProcessedPayment = () => {
    const history = useHistory();
    const { clearCart, cartItems } = useContext(CartContext);
    useEffect(() => {
        if (cartItems.length !== 0) { clearCart() }
    }, [clearCart, cartItems]);

    return (
        <div className="processpay">

            <h1 className="processpay__title"> Thank you for your order</h1>

            <p>We are currently processing your order and
                will send you a confirmation email shortly
            </p>
            <div>
                <button className="processpay__btn"
                    onClick={() => history.push('/shop')}>
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default ProcessedPayment
