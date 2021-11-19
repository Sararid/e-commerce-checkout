import React from 'react'
import '../styles/Layout/Main.scss'
import hero from '../images/hero_1 (4).jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <main>
                <section className="main"> <h1> RANDA FAVORITE SHOP</h1>
                    <div className="main__section">

                        <div >
                            <img className="main__section--img" src={hero} alt="Book" />
                        </div>
                        <div className="main__section--desc">
                            <h2 > Shop now for your item</h2>
                            <p>Discover the latest trends in men's and women's
                                fashion and style with RANDA.
                                Shop the new range of clothes, accessories, shoes, bags and more.

                            </p>
                            <Link to={"/shop"}>  <button className="main__section--btn" id='shop-now' >Go to products</button>  </Link >
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;
