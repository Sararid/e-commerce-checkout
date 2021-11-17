import React from 'react'
import '../styles/Layout/Main.scss'
import makeup from '../images/makeup.jpg';

const Main = () => {
    return (
        <>
            <main>
                <section className="main">
                    <div className="main__section">
                        <div >
                            <img className="main__section--img" src={makeup} alt="Book" />
                        </div>
                        <div className="main__section--desc">
                            <h2 >Make-up Kit</h2>
                            <p>You will fall in love with Pacifica's long lasting, nourishing, natural mineral
                                mascara.  This amazing formula is infused with coconut oil and vitamin B
                                to hydrate each lash as it lengthens, strengthens and adds volume.
                            </p>
                            <button className="main__section--btn" id='shop-now' >Go to product</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;
