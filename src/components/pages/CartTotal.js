import React from 'react'

const CartTotal = ({ itemCount, total, clearCart }) => {
    return (
        <div>
            <div>
                <div>
                    <p>Total items: {itemCount}</p>
                    <p>{`Total: ${total}`}</p>
                </div>
                <div>
                    <button>CHECKOUT</button></div> {/* will add the checkout component and link */}
                <button onClick={() => clearCart()}>CLEAR CART </button>
            </div>
        </div>
    )
}

export default CartTotal
