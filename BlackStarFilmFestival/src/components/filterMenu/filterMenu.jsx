import { useState, useEffect } from 'react';
import './filterMenu.css';

export default function FilterMenu({ toggleFilterMenuOpen, searchQuery, setSearchQuery }) {
    // User filter data
    const [filters, setFilters] = useState({
        category: [],
        nomination: [],
        premiere: [],
        search: ''
    });

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleClearFilters = () => {
        setFilters({
            category: [],
            nomination: [],
            premiere: [],
            search:''
        })
    }

    // Log filters object for dev purposes, remove later
    useEffect(() => {
        console.log(filters);
    }, [filters]);

    // UI States
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isNominationOpen, setIsNominationOpen] = useState(false);
    const [isPremiereOpen, setIsPremiereOpen] = useState(false);

    // UI States toggle functions
    const toggleCategoryOpen = () => setIsCategoryOpen(!isCategoryOpen);
    const toggleNominationOpen = () => setIsNominationOpen(!isNominationOpen);
    const togglePremiereOpen = () => setIsPremiereOpen(!isPremiereOpen);

    return (
        <div className='filterMenu'>
            <div className='filterMenu-header'>
                <h1>Filter by</h1>
                <img src="src/assets/close.png" alt="Results Filter" onClick={toggleFilterMenuOpen} />
            </div>
            <section className='filterMenu-section'>
                <div className='filterMenu-option'>
                    <div className='filterMenu-option-header' onClick={toggleCategoryOpen}>
                        <h3>Category</h3>
                        {isCategoryOpen ?
                            <i class="fa-solid fa-caret-up"></i>
                            :
                            <i class="fa-solid fa-caret-down"></i>
                        }
                    </div>
                    {isCategoryOpen &&
                        <div className='filterMenu-option-checkboxes'>
                            <label>
                                <input type="checkbox" />
                                Bazaar
                            </label>
                            <label>
                                <input type="checkbox" />
                                Conversation
                            </label>
                            <label>
                                <input type="checkbox" />
                                Experimental
                            </label>
                            <label>
                                <input type="checkbox" />
                                Feature Documentary
                            </label>
                            <label>
                                <input type="checkbox" />
                                Feature Narrative
                            </label>
                            <label>
                                <input type="checkbox" />
                                Short Documentary
                            </label>
                            <label>
                                <input type="checkbox" />
                                Short Narrative
                            </label>
                        </div>
                    }
                </div>
                <div className='filterMenu-option'>
                    <div className='filterMenu-option-header' onClick={toggleNominationOpen}>
                        <h3>Award Nomination</h3>
                        {isNominationOpen ?
                            <i class="fa-solid fa-caret-up"></i>
                            :
                            <i class="fa-solid fa-caret-down"></i>
                        }
                    </div>
                    {isNominationOpen &&
                        <div className='filterMenu-option-checkboxes'>
                            <label>
                                <input type="checkbox" />
                                Best Experimental Film Nominee
                            </label>
                            <label>
                                <input type="checkbox" />
                                Best Feature Documentary Nominee
                            </label>
                            <label>
                                <input type="checkbox" />
                                Best Feature Narrative Nominee
                            </label>
                            <label>
                                <input type="checkbox" />
                                Best Short Documentary Nominee
                            </label>
                            <label>
                                <input type="checkbox" />
                                Best Short Narrative Nominee
                            </label>
                        </div>
                    }
                </div>
            </section>
            <section className='filterMenu-section'>
                <div className='filterMenu-option'>
                    <div className='filterMenu-option-header' onClick={togglePremiereOpen}>
                        <h3>Premiere Status</h3>
                        {isPremiereOpen ?
                            <i class="fa-solid fa-caret-up"></i>
                            :
                            <i class="fa-solid fa-caret-down"></i>
                        }
                    </div>
                    {isPremiereOpen &&
                        <div className='filterMenu-option-checkboxes'>
                            <label>
                                <input type="checkbox" />
                                East Coast
                            </label>
                            <label>
                                <input type="checkbox" />
                                North America
                            </label>
                            <label>
                                <input type="checkbox" />
                                Philadelphia
                            </label>
                            <label>
                                <input type="checkbox" />
                                United States
                            </label>
                            <label>
                                <input type="checkbox" />
                                World
                            </label>
                        </div>
                    }
                </div>
                <div className='filterMenu-option-text'>
                    <input
                        type="text"
                        placeholder="Search for..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </section>
            <div className='filterMenu-section'>
                <button onClick={handleClearFilters}>Clear Filters</button>
            </div>
        </div>
    );
}