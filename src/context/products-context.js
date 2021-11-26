import React, { createContext, useState, useEffect } from 'react';
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [data, setData] = useState([])

    const fetchProducts =
        () => {

            return fetch('https://fakestoreapi.com/products') //
                .then(response => response.json())

                .then(response => {

                    const result = response

                        .map(item => {
                            return {
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                price: parseInt(item.price),
                                image: item.image,
                                category: item.category
                            }

                        });
                    setData(result);
                })
                .catch(error => { console.log('err', error) });
        };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ data }}>
            {
                children
            }
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;