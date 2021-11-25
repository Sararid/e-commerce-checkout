import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import "../../styles/Layout/Checkout.scss";
import { Link } from "react-router-dom";
import CountriesDropDown from "./CountriesDropDown";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import "../../styles/Layout/Payment.scss";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

const Payment = () => {
    const { total } = useContext(CartContext);

    const [state, setState] = useState({
        name: "",
        number: "",
        dates: "",
        cvc: "",
    });
    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <fieldset className="containerPay">
                <form className="containerPay__form" onSubmit={handleSubmit}>
                    <div className="containerPay__name">
                        <label htmlFor="name">Name on Card</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="containerPay__card">
                        <input
                            type="text"
                            name="number"
                            id="number"
                            placeholder="Card number"
                            maxLength="16"
                            pattern="[\d| ]{16,22}"
                            required
                            onChange={handleInputs}
                        />
                        <div>
                            {" "}
                            <FaCcVisa /> <FaCcMastercard />
                        </div>
                    </div>{" "}
                    <div className="containerPay__date">
                        <input
                            type="text"
                            name="dates"
                            id="dates"
                            placeholder="MM/YY"
                            maxLength="5"
                            pattern="\d\d/\d\d"
                            required
                            onChange={handleInputs}
                        />
                        <input
                            type="text"
                            name="cvc"
                            id="cvc"
                            placeholder="CVC"
                            pattern="\d{3,4}"
                            maxLength="4"
                            required
                            autoComplete="off"
                            onChange={handleInputs}
                        />{" "}
                        <BsFillCreditCard2BackFill />
                    </div>
                    <div className="containerPay__country">
                        <label htmlFor="country">Country </label>
                        <CountriesDropDown />

                        <input
                            type="text"
                            name="zip"
                            id="zip"
                            required
                            placeholder="zip code"
                        />
                    </div>
                </form>
                <div className="containerPay__btn">
                    {" "}
                    <Link to="/payment-success">
                        {" "}
                        <button>{`Pay: €${total}`} </button>
                    </Link>
                </div>{" "}
            </fieldset>
        </>
    );
};

export default Payment;
