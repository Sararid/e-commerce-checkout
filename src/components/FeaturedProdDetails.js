import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    selectedProducts,
    removeSelectedProducts,
} from "../redux/actions/productActions";
import { Card, Button } from "react-bootstrap";

const ProductDetails = () => {
    const products = useSelector((state) => state.products);
    const { id, title, price, category, image, description } = products;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err);
            });
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, [productId]);

    return (
        <div className='singleProduct__container'>
            {Object.keys(products).length === 0 ? (
                <div>...Loading </div>
            ) : (
                <li key={id} id={id} className="singleProduct">
                    <Card style={{ width: "25rem" }}>
                        <Card.Img variant="top" src={image} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                {category}
                            </Card.Subtitle>
                            <span> € {price}</span>

                            <Card.Text>{description} </Card.Text>

                            <Button>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </li>
            )}
        </div>
    );
};

export default ProductDetails;
