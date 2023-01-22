import { React, useState } from "react";
import SearchResults from "./SearchResults";
import MapContainer from "./Map";
export default function SearchMainPage() {
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [address, setAddress] = useState('');

    const handleChange = (event) => {
        setPrice1(event.target.value);
        setPrice2(event.target.value);
        setStartDate(event.target.value);
        setEndDate(event.target.value);
        setAddress(event.target.value);
    }

    return (
        <div className="main-result-page">
            <div className="results--title">
                Storage options
            </div>
            <div className="filters">
                <div className="price--filters">
                    Price Range:
                    <form className="price-form">
                        <input
                            className="price--input"
                            value = {price1}
                            type="number"
                        /> -
                        <input
                            className="price--input"
                            value = {price2}
                            type="number"
                        />
                    </form>
                </div>
                <div className="date--filters">
                    <form className="date-form">
                        From:
                        <input
                            className="date--input"
                            type="date"
                            value = {start_date}
                        />
                        To:
                        <input
                            className="date--input"
                            type="date"
                            value = {end_date}
                        />
                    </form>
                </div>
                <div className="address">
                    <form>
                        Address:
                        <input
                            className="address--input"
                            type="text"
                            value = {address}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}