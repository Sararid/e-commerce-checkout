import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import '../styles/Layout/Featured.scss';

const FeauturedCollection = () => {
    return (
        < >
            <section>
                <h2 className="featured__header">Featured Collection </h2>
                <div className="featured__product">
                    <FeaturedProduct />
                </div></section>
        </>
    )
}

export default FeauturedCollection
