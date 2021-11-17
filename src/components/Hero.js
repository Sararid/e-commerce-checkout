import "../styles/Layout/Hero.scss";
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <>
            <div className="hero">
                <div id="index" className="hero__text">
                    <h1 className="hero__text--title">Welcome to RANDA</h1>
                    <Link to={'/shop'}>    <button className="hero__text--btn">
                        Shop now
                    </button></Link>


                </div>
            </div>
        </>
    );
};

export default Hero;
