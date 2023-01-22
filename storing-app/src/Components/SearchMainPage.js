import React from "react";
export default function SearchMainPage() {
    return (
        <div className="main-result-page">
            <div className="filters">
                <div className="price--filters">
                    Price Range:
                    <form className="price-form">
                        <input
                            className="price--input"
                            type="number"
                            required
                        /> -
                        <input
                            className="price--input"
                            type="number"
                            required
                        />
                    </form>
                </div>
                <div className="date--filters">
                    <form className="date-form">
                        From:
                        <input
                            className="date--input"
                            type="date"
                            required
                        />
                        To:
                        <input
                            className="date--input"
                            type="date"
                            required
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