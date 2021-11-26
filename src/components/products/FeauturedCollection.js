import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import FeaturedProduct from './FeaturedProduct';
import '../../styles/products/FeaturedProduct.scss';
import '../../styles/products/Featured.scss';

const FeauturedCollection = () => {
    const { data } = useContext(ProductsContext);
    const productItems = data.filter((product, i) => i < 6).map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));

    return (
        <>
            <section>
                <h2 className="featured__header">Featured Collection </h2>
                <div className="featured__product">
                    {
                        productItems
                    }
                </div></section>
        </>
    )
}

export default FeauturedCollection
