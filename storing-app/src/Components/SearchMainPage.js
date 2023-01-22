import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function SearchMainPage(props) {

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
                            value={props.price1}
                            type="number"
                            onChange={props.setPrice1}
                            name="price1"
                        /> -
                        <input
                            className="price--input"
                            value={props.price2}
                            type="number"
                            onChange={props.setPrice1}
                            name="price2"
                        />
                    </form>
                </div>
                <div className="date--filters">
                    <div className="date-form">
                        From:
                        <DatePicker
                            selected={props.startDate}
                            selectsStart
                            startDate={props.startDate}
                            endDate={props.endDate} // add the endDate to your startDate DatePicker now that it is defined
                            className = "date--input"
                            onChange={date => props.setStartDate(date)}
                        />
                        To:
                        <DatePicker
                            selected={props.endDate}
                            selectsEnd
                            startDate={props.startDate}
                            endDate={props.endDate}
                            minDate={props.startDate}
                            className = "date--input"
                            onChange={date => props.setEndDate(date)}
                        />
                    </div>
                </div>
                <div className="address">
                    <form>
                        Address:
                        <input
                            className="address--input"
                            type="text"
                            value={props.address}
                            onChange={address => props.setAddress(address)}
                        />
                    </form>

                </div>
            </div>
        </div>
    )
}