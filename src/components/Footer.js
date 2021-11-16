import '../styles/Layout/Footer.scss';
import logo from '../images/logo.jpg';


const Footer = () => {
    const year = new Date().getFullYear();
    return <>
        <footer className="footer">
            {year}  ©<img className="footer__logo" src={logo} alt="logo" /> </footer></>
}

export default Footer;