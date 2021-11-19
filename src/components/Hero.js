import "../styles/Layout/Hero.scss";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
const Hero = () => {
    return (
        <>
            {/* <div className="hero">
                <div id="index" className="hero__text">
                    <h1 className="hero__text--title">Welcome to RANDA</h1>
                    <Link to={'/shop'}>    <Button className="hero__text--btn">
                        Shop now
                    </Button></Link>


                </div>
            </div> */}

            <Carousel>
                <Carousel.Item>
                    <div className="hero">
                        <div id="index" className="hero__text">
                            {" "}
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>
                            {" "}
                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>{" "}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero">
                        <div id="index" className="hero__text">
                            {" "}
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>
                            {" "}
                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>{" "}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hero">
                        <div id="index" className="hero__text">
                            {" "}
                        </div>
                    </div>
                    <Carousel.Caption>
                        <h1 className="hero__text--title">Welcome to RANDA</h1>
                        <Link to={"/shop"}>
                            {" "}
                            <Button variant="light" className="hero__text--btn">Shop now</Button>
                        </Link>{" "}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Hero;
