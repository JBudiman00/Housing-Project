import React from "react";
import SearchResults from "./SearchResults";
import MapContainer from "./Map";

export default function MapResults() {
    return (
        <div className="listings">
            
            <div>
                <MapContainer />
            </div>

            <div className="results">
                <SearchResults />
                <SearchResults />
                <SearchResults />
                <SearchResults />
                <SearchResults />
            </div>


        </div>
    )
}