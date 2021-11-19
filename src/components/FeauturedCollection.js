import React, { useContext } from 'react';
import { ProductsContext } from '../context/products-context';
import FeaturedProduct from './FeaturedProduct';
import '../styles/Layout/Featured.scss';



const FeauturedCollection = () => {
    const { data } = useContext(ProductsContext);
    const productItems = data.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));

    console.log(data)

    return (
        < >
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
