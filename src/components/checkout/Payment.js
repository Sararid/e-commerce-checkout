import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import "../../styles/checkout/Checkout.scss";
import "../../styles/checkout/Payment.scss";
import CountriesDropDown from "./CountriesDropDown";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { CgPaypal } from "react-icons/cg";

const Payment = () => {
    const history = useHistory();
    const { total } = useContext(CartContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorCard, setErrorCard] = useState("");
    const [errorForm, setErrorForm] = useState("");
    const [state, setState] = useState({
        email: "",
        name: "",
        number: "",
        dates: "",
        cvc: "",
    });

    const handleValidation = () => {
        if (!state.email || !state.email.includes("@")) {
            setErrorMessage("Please enter valid email!");
        } else {
            setErrorMessage("");
        }
        if (!state.number || state.number.match(/^[a-zA-Z]+$/)) {
            setErrorCard("Please enter valid card number!");
        } else if (state.number.length < 16) {
            setErrorCard("Please enter valid card 16 digit number!");
        } else {
            setErrorCard("");
        }
        if (state.email && state.name && state.number && state.dates && state.cvc) {
            history.push("/payment-success");
        } else {
            setErrorForm("Please complete all fields before payment!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <div className="containerPay">
                <form className="containerPay__form" onSubmit={handleSubmit}>
                    <div className="containerPay__name">
                        <button>
                            PAY WITH PAYPAL <CgPaypal style={{ fontSize: "30px", paddingRight: "6px" }} />
                        </button>
                        <div className="paywithcard">
                            <div>______</div> <h1>OR </h1>
                            <div>______</div>
                        </div>
                        <div className="paywithcard__txt">
                            PAY WITH CARD <FaCcVisa style={{ fontSize: "30px", paddingRight: "6px" }} />
                            <FaCcMastercard style={{ fontSize: "30px", paddingRight: "6px" }} />
                        </div>
                        <label htmlFor="name">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            required
                            onChange={handleInputs}
                        />
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                        >
                            {errorMessage}
                        </span>
                        <label htmlFor="name">Name on Card</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={handleInputs}
                        />
                    </div>
                    <div> </div>
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
                    <span
                        style={{
                            fontWeight: "bold",
                            color: "red",
                        }}
                    >
                        {errorCard}
                    </span>
                    <div>

                        <BsFillCreditCard2BackFill />
                    </div>
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
                        />
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
                <span
                    style={{
                        fontWeight: "bold",
                        color: "red",
                    }}
                >
                    {errorForm}
                </span>
                <div className="containerPay__btn">

                    <button onClick={handleValidation}> {`Pay: €${total}`} </button>
                </div>
            </div>
        </>
    );
};

export default Payment;
