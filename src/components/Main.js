import React from 'react'
import '../styles/Layout/Main.scss'
import hero from '../images/hero_1 (4).jpg';

const Main = () => {
    return (
        <>
            <main>
                <section className="main">
                    <div className="main__section">
                        <div >
                            <img className="main__section--img" src={hero} alt="Book" />
                        </div>
                        <div className="main__section--desc">
                            <h2 > Shop for Men's Fashion </h2>
                            <p>Discover the latest trends in men's fashion and style with RANDA. Shop the new range of men's clothes, accessories, shoes, bags and more.

                            </p>
                            <button className="main__section--btn" id='shop-now' >Go to products</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;
