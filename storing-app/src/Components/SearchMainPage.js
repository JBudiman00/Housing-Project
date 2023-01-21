import React from "react";
import SearchResults from "./SearchResults";
import MapContainer from "./Map";
export default function SearchMainPage() {

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
                            type="number"
                        /> -
                        <input
                            className="price--input"
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
                        />
                        To:
                        <input
                            className="date--input"
                            type="date"
                        />
                    </form>
                </div>
                <div className="address">
                    <form>
                        Address:
                        <input
                            className="address--input"
                            type="text"
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}