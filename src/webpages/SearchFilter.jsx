import React, { useState } from 'react';
import './SearchFilter.css';

/**
 * SearchFilter component allows users to refine their property search
 * using various criteria like type, price, bedrooms, date, and postcode.
 */
const SearchFilter = ({ filters, setFilters }) => {
    // Local state for handling input changes before applying
    const [localFilters, setLocalFilters] = useState(filters);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleApply = () => {
        setFilters(localFilters);
    };

    return (
        <div className="search-filter-dropdown">
            <div className="filter-grid">
                <div className="filter-group">
                    <label htmlFor="type">House Type</label>
                    <select id="type" name="type" value={localFilters.type} onChange={handleChange}>
                        <option value="">Any</option>
                        <option value="house">House</option>
                        <option value="detached">Detached</option>
                        <option value="semi-detached">Semi-Detached</option>
                        <option value="terraced">Terraced</option>
                        <option value="flat">Flat/Apartment</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="villa">Villa</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label>Price Range (£)</label>
                    <div className="range-inputs">
                        <input
                            type="number"
                            name="minPrice"
                            placeholder="Min"
                            value={localFilters.minPrice}
                            onChange={handleChange}
                        />
                        <span>-</span>
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder="Max"
                            value={localFilters.maxPrice}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="minBedrooms">Bedrooms</label>
                    <select id="minBedrooms" name="minBedrooms" value={localFilters.minBedrooms} onChange={handleChange}>
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
                    <div className="range-inputs">
                        <input
                            type="date"
                            name="dateFrom"
                            value={localFilters.dateFrom}
                            onChange={handleChange}
                        />
                        <span>to</span>
                        <input
                            type="date"
                            name="dateTo"
                            value={localFilters.dateTo}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="postcode">Postcode Area</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        placeholder="e.g. SW1, IG7"
                        value={localFilters.postcode}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="filter-actions">
                <button className="apply-filters-btn" onClick={handleApply}>
                    Apply Filters
                </button>
                <button
                    className="clear-filters-btn"
                    onClick={() => {
                        const cleared = {
                            type: '',
                            minPrice: '',
                            maxPrice: '',
                            minBedrooms: '',
                            dateFrom: '',
                            dateTo: '',
                            postcode: ''
                        };
                        setLocalFilters(cleared);
                        setFilters(cleared);
                    }}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default SearchFilter;
