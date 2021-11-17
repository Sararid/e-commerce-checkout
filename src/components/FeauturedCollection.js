import React from 'react';
import FeaturedProduct from './FeaturedProduct';
import '../styles/Layout/Featured.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from '../redux/actions/productActions'
import { useEffect } from 'react';

const FeauturedCollection = () => {


    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts =
        () => {
            // Llamamos al API
            return fetch('http://makeup-api.herokuapp.com/api/v1/products.json') //
                .then(response => response.json())

                .then(response => {
                    // Cuando responde el API podemos limpiar los datos aquí
                    const result = response
                        .filter((item, index) => (index < 4))
                        .map(item => {
                            return {
                                id: item.id,
                                name: item.name,
                                description: item.description,
                                price: item.price,
                                image: item.image_link,
                                category: item.category
                            }


                        });
                    dispatch(setProducts(result));
                })
                .catch(error => { console.log('err', error) });
        };


    useEffect(() => {
        fetchProducts();
    }, []);

    console.log('products are :' + products)

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
