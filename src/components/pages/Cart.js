import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CartContext } from "../../context/cart-context";
import CartItem from './Cartitem';
import CartTotal from "./CartTotal";


export const isInCart = (product, cartItems) => {
    return cartItems.find((item) => item.id === product.id);
};


const Cart = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);

    const addRemove = { increase, decrease, removeProduct }
    return (
        <section>
            <Button>
                <AiOutlineArrowLeft />
                Back to Shop
            </Button>
            <h1>CART </h1>

            {
                cartItems.length === 0 ? <div>Yopur Cart is empty</div> : <>
                    <div>
                        {
                            cartItems.map(item => <CartItem {...item} key={item.id}  {...addRemove} />) // it will spread out in the componetn cartiem thanks to thr props
                        }</div>
                    <CartTotal itemCount={itemCount} total={total} clearCart={clearCart} />
                </>
            }

        </section>
    );
};

export default Cart;
