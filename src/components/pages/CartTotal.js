import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Layout/Cart.scss';

const CartTotal = ({ itemCount, total, clearCart }) => {
    return (
        <div className='cart__container--total'>


            <p>Total items: {itemCount}</p>
            <p>{`Total: €${total}`}</p>


            <Link to='/checkout'><button>CHECKOUT</button></Link>
            <button onClick={() => clearCart()}>CLEAR CART </button>

        </div>
    )
}

export default CartTotal
