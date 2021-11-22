import React, { useContext, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../../context/cart-context';
import { fetchFromAPI } from '../../Api';


const StripeCheckout = () => {
    const [email, setEmail] = useState('');
    const { cartItems } = useContext(CartContext)
    const stripe = useStripe();
    //const elements = useElements()

    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        // stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement)
        // })
        const line_items = cartItems.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price * 100,//anount is in cents,
                    product_data: { //stripe qill use this to diplayu the product info for the guest , this what stripe want us to construct it 
                        name: item.title,
                        description: item.description,
                        images: [item.image]
                    }
                }
            }
        });
        //now we will call our backend
        const response = await fetchFromAPI('create-checkout-session', {
            body: { line_items, customer_email: email },
        });
        const { sessionId } = response;
        const { error } = await stripe.redirectToCheckout({
            sessionId
        });
        if (error) {
            console.log(error);

        }

    }
    return (
        <>
            <form onSubmit={handleGuestCheckout}> <label htmlFor="email">Email</label>
                <input type="email" onChange={(ev) => { setEmail(ev.target.value) }} value={email}
                    className="input" />
            </form>
            <div className='submitBtn'>
                <button type='submit'>Checkout</button>
                <CardElement />
                <button>buy</button>
            </div>
        </>
    )
}

export default StripeCheckout
