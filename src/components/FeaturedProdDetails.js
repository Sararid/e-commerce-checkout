import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {

    const products = useSelector((state) => state.products);
    const { id, title, price, category, image, description } = products;
    const { productId } = useParams()
    const dispatch = useDispatch()

    const fetchProductDetails =
        async () => {
            const response = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch((err) => { console.log("err", err) })
            dispatch(selectedProducts(response.data))
        }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId]);


    return (
        <div>
            {Object.keys(products).length === 0 ? (<div>
                ...Loading </div>) : (
                <ul>
                    <li id={id}>
                        <h2> {title} </h2>
                        <img src={image} alt={title} />
                        <span> {price}</span>
                        <span> {category}</span>
                        <p> {description}</p>

                    </li>
                </ul>

            )}

        </div>
    )
}

export default ProductDetails;
