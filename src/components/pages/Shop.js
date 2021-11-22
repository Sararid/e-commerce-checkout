import React from 'react';
import FeaturedProduct from '../FeaturedProduct';
import '../../styles/Layout/Featured.scss';

import { ProductsContext } from '../../context/products-context';

import { useContext } from 'react';

const Shop = () => {

    const { data } = useContext(ProductsContext);
    const productItems = data.map(product => (
        <FeaturedProduct {...product} key={product.id} />

    ));

    console.log(data)

    return (
        < >
            <section>
                <h2 className="featured__header">SHOP NOW </h2>
                <div className="featured__product">

                    {

                        productItems
                    }
                </div></section>
        </>
    )
}


export default Shop;
