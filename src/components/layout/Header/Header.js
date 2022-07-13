import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.jpg";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../../context/cart-context";
import { FiMenu } from "react-icons/fi"
import { useContext } from "react";

const Header = () => {
    const { itemCount } = useContext(CartContext);
    console.log(itemCount);


    return (
        <header className="header">
            <div className="header__container">
                <FiMenu className="header__icon" />
                <div className="logo">
                    <Link to="/" className="header__nav--link">    <img className="logo__img" src={logo} alt="logo" />
                    </Link>   </div>
                {/*
            <nav>

                <ul className="header__nav">
                    <li>
                        <Link to="/" className="header__nav--link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className="header__nav--link">
                            Shop
                        </Link>
                    </li> 
                </ul>



            </nav>*/}
                <Link to="/cart" className="header__nav--link">
                    <BsCart2 className="header__icon" />
                    {itemCount > 0 ? (
                        <span className="header__icon--count">{itemCount}</span>
                    ) : null}
                </Link>
            </div>
        </header>
    );
};

export default Header;
