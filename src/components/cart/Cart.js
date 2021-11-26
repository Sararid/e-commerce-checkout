import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CartContext } from "../../context/cart-context";
import CartItem from "./Cartitem";
import CartTotal from "./CartTotal";
import "../../styles/cart/Cart.scss";
import { Link } from "react-router-dom";
export const isInCart = (product, cartItems) => {
    return cartItems.find((item) => item.id === product.id);
};

const Cart = () => {
    const {
        cartItems,
        itemCount,
        total,
        increase,
        decrease,
        removeProduct,
        clearCart,
    } = useContext(CartContext);

    const addRemove = { increase, decrease, removeProduct };
    return (
        <section>
            <div className="cart__title">
                <Link to="/shop">
                    {" "}
                    <button className="cart__btn">
                        <AiOutlineArrowLeft />
                        Back to Shop
                    </button>
                </Link>
                <h1>CART </h1>
            </div>
            <section className="cart">
                {cartItems.length === 0 ? (
                    <div className="cart__container">
                        {" "}
                        <h2> Your Cart is empty</h2>
                    </div>
                ) : (
                    <>
                        <div className="cart__container">
                            {
                                cartItems.map((item) => (
                                    <CartItem {...item} key={item.id} {...addRemove} />
                                ))
                            }
                        </div>
                        <CartTotal
                            itemCount={itemCount}
                            total={total}
                            clearCart={clearCart}
                        />
                    </>
                )}{" "}
            </section>
        </section>
    );
};

export default Cart;
