import React, { useState } from "react";
import "../../styles/Layout/Payment.scss";
import api from "../../service/api";
import { useEffect } from "react";

const CountriesDropDown = () => {
    const [data, setData] = useState([]);
    // call to API
    useEffect(() => {
        api().then((data) => {
            setData(data);
        });
    }, []);
    const nameCountry = data.map((item, i) => {
        return <option key={i}>{item.name}</option>;
    });
    return (
        <>
            <select
                name="country"
                class="form-control"
                id="country"
                className="input_country"
            >
                <option value="">Select a Country</option> {nameCountry}

            </select>
        </>
    );
};

export default CountriesDropDown;
