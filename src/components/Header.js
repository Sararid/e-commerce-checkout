import "../styles/Layout/Header.scss";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import { BsCart2 } from 'react-icons/bs';


const Header = () => {
    return (
        <>
            <header className="header">
                <div className='logo'>  <img className="logo__img" src={logo} alt="logo" /></div>
                <nav>
                    <ul className="header__nav">
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li> <Link to="/shop">Shop</Link></li>
                        <Link to="/cart"> <BsCart2 /></Link>
                    </ul>
                </nav>

            </header>
        </>
    );
};

export default Header;
