import React from 'react';
import FeaturedProduct from '../FeaturedProduct';
import '../../styles/Layout/Featured.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from './../../redux/actions/productActions'
import { useEffect } from 'react';

const Shop = () => {


    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts =
        () => {
            // Llamamos al API
            return fetch('https://fakestoreapi.com/products') //
                .then(response => response.json())

                .then(response => {
                    // Cuando responde el API podemos limpiar los datos aquí
                    const result = response

                        .map(item => {
                            return {
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                price: item.price,
                                image: item.image,
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
                <h2 className="featured__header">Shop now</h2>
                <div className="featured__product">
                    <FeaturedProduct />
                </div></section>
        </>
    )
}

export default Shop;
