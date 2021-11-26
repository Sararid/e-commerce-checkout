import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/cart/Cart.scss';

const CartTotal = ({ itemCount, total, clearCart }) => {
    return (
        <div className='cart__container--total'>


            <p>TOTAL ITEMS: {itemCount}</p>
            <p>{`TOTAL: €${total}`}</p>

            <Link to='/checkout'><button>CHECKOUT</button></Link>
            <button onClick={() => clearCart()}>CLEAR CART </button>

        </div>
    )
}

export default CartTotal
