import React from 'react';
// a grid of search filters that show up when the arrow is clicked, moved to a seperate file for readability purposes

const SearchFilter = () => {
    return (
        <div className="search-filter-dropdown">
            <div className="filter-group">
                <label>House Type</label>
                <select>
                    <option value="">Any</option>
                    <option value="detached">Detached</option>
                    <option value="semi-detached">Semi-Detached</option>
                    <option value="terraced">Terraced</option>
                    <option value="flat">Flat/Apartment</option>
                    <option value="bungalow">Bungalow</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Price Range</label>
                <div className="price-inputs">
                    <input type="number" placeholder="Min" />
                    <span>-</span>
                    <input type="number" placeholder="Max" />
                </div>
            </div>

            <div className="filter-group">
                <label>Bedrooms</label>
                <select>
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Date Added</label>
                <div className="date-inputs">
                    <input type="date" placeholder="From" />
                    <span>to</span>
                    <input type="date" placeholder="To" />
                </div>
            </div>

            <div className="filter-group">
                <label>Postcode Area</label>
                <input type="text" placeholder="e.g. SW1, M1" />
            </div>

            <button className="apply-filters-btn">Apply Filters</button>
        </div>
    );
};

export default SearchFilter;
