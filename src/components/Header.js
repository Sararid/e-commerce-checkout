import "../styles/Layout/Header.scss";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from "../context/cart-context";
import { useContext } from "react";

const Header = () => {

    const { itemCount } = useContext(CartContext)
    return (
        <>
            <header className="header">
                <div className='logo'>  <img className="logo__img" src={logo} alt="logo" /></div>
                <nav>
                    <ul className="header__nav">
                        <li > <Link to="/" className="header__nav--link">Home</Link></li>

                        <li> <Link to="/shop" className="header__nav--link">Shop</Link></li>
                        <Link to="/cart" className="header__nav--link"> <BsCart2 className="header__icon" />

                            {itemCount > 0 ? <span className="header__icon--count">{itemCount}</span> : null}
                        </Link>  </ul> <div className="header__nav--underline">

                    </div >
                </nav>

            </header>
        </>
    );
};

export default Header;
