import "../../styles/Layout/Hero.scss";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import hero from '../../images/jeans5.jpg'
import hero2 from '../../images/sweater.jpg'
import hero3 from '../../images/jeans3.jpg'
const Hero = () => {
    return (
        <>

            <Carousel>
                <Carousel.Item>   <img
                    className="d-block w-100 hero__img"
                    src={hero2}
                    alt="First slide"
                />
                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>
                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero__img"
                        src={hero}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>

                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero__img"
                        src={hero3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>
                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Hero;
