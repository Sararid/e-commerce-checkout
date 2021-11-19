import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Card, Button, Spinner } from "react-bootstrap";
import { ProductsContext } from "../context/products-context";
import { CartContext } from '../context/cart-context';
import { isInCart } from './pages/Cart';

// const ProductDetails = () => {
//     const { data } = useContext(ProductsContext)
//     const { productId } = useParams();
//     const [product, setProduct] = useState();

//     useEffect(() => {
//         const product = data.find(item => Number(item.id) === Number(productId));

//         if (!product) {
//             return console.log('error');
//         } else {
//             setProduct(product);
//         }

//     })

//     //  const { image, title, price, description } = product;

//     return (
//         <>
//             <img src={product.image} alt={product.title} />

//         </>
//     )
// }
// export default withRouter(ProductDetails);


const ProductDetails = () => {


    const { productId } = useParams();
    const { data } = useContext(ProductsContext)
    const [product, setProduct] = useState([]);
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err);
            });
        setProduct(response.data);
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            console.log('eroor');
        };
    }, [productId]);

    const { id, title, price, category, image, description } = product;
    return (
        <div className='singleProduct__container'>
            {Object.keys(product).length === 0 ? (
                <Spinner animation="border" />
            ) : (
                <li key={id} id={id} className="singleProduct">
                    <Card style={{ width: "25rem" }}>
                        <Card.Img variant="top" src={image} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>

                            <Card.Subtitle className="mb-2 text-muted  ">
                                <span className="singleProduct__subtitle"> {category} </span>
                            </Card.Subtitle>
                            <span className="singleProduct__price"> € {price}</span>
                            <p className="singleProduct__description"> {description}</p>
                            <Card.Text>{data.description} </Card.Text>
                            { // we check fist if product is in cart, if not we add it to cart with the reducer addProduct
                                !isInCart(product, cartItems) &&
                                //if item is not in cart we display the add button
                                < Button style={{ width: 200 }} className="is-black nomad-btn" onClick={() => addProduct(product)}>Add to cart</Button>
                            }
                            {
                                isInCart(product, cartItems) &&
                                //if item is not in cart we display the add button
                                < Button style={{ width: 200 }} variant="dark" className="is-black nomad-btn">Add more</Button>
                            }
                            <button>Proceed to checkout</button>

                        </Card.Body>
                    </Card>
                </li>
            )}
        </div>
    );


}
export default ProductDetails;


