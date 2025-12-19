import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import SearchFilter from './SearchFilter';

function SearchBox({searchTerm, setSearchTerm}) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // function to toggle the filter menu, change state to opposite of what is currently active
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
            <div className="search-section">
                <h2>Search for your next home!</h2>
                <div className="search-box-container">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button type="search" className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                        </button>
                        {/* triggering the filter menu when button is clicked and changing the icon to up or down */}
                        <button type="button" className="filter-toggle-btn" onClick={toggleFilter}>
                            <FontAwesomeIcon icon={isFilterOpen ? faChevronUp : faChevronDown} />
                        </button>
                    </div>

                </div>
                {isFilterOpen && <SearchFilter />}
            </div>
    )
}

export default SearchBox;