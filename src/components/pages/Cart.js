import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { AiOutlineArrowLeft } from "react-icons/ai";
import IImage from '../../images/lipstick2.jpg'

export const isInCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id)
}
const Cart = () => {


    return (
        <section>

            <Button>
                <AiOutlineArrowLeft />
                Back to Shop
            </Button>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant='top' src={IImage} alt='' className="singleProduct__image" />
                <Card.Body>

                    <Card.Title>product title</Card.Title>

                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>€ 10</span>
                        <span>clothes</span>
                    </Card.Subtitle>



                </Card.Body>

            </Card>

        </section>
    )
}

export default Cart
