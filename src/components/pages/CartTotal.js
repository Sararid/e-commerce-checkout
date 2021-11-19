import React from 'react'

const CartTotal = ({ itemCount, total }) => {
    return (
        <div>
            <div>
                <div>
                    <p>Total items: {itemCount}</p>
                    <p>{`Total: ${total}`}</p>
                </div>
                <div>
                    <button>CHECKOUT</button></div> {/* will add the checkout component and link */}
                <button>CLEAR CART </button>
            </div>
        </div>
    )
}

export default CartTotal
