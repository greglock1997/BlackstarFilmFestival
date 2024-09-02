import { useState, useEffect } from 'react';
import './filterMenu.css';

export default function FilterMenu({ toggleFilterMenuOpen, searchTags, updateSearchTags }) {
    // Hardcoded list of options for category / tag input
    const tagList = [
        'Cherry Street Pier',
        'Lightbox Film Center',
        `Morgan's Pier`,
        'Perelman Theater',
        'Rendell Room at Kimmel Center',
        'SOUTH Restaurant & Jazz Club',
        'Suzanne Roberts Theatre',
        'The Barnes Foundation',
        'The Daily Jawn Stage',
        'The Lounge at Kimmel Center',
        'W Philadelphia'
    ];

    const handleTagChange = (event) => {
        const newTag = event.target.value;
        const updatedTags = event.target.checked ? [...selectedTags, newTag] : selectedTags.filter(tag => tag !== newTag);

        setSelectedTags(updatedTags);
        
        updateSearchTags(updatedTags);
    };

    const [selectedTags, setSelectedTags] = useState([]);

    // Useffect synchronises tags array in component and app.jsx
    // this prevents options being reset
    useEffect(() => {
        setSelectedTags(searchTags);
    }, [searchTags]);

    // UI States
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const toggleCategoryOpen = () => setIsCategoryOpen(!isCategoryOpen);

    return (
        <div className='filterMenu'>
            <div className='filterMenu-header'>
                <h1>Filter by</h1>
                <img src="src/assets/close.png" alt="Close Filter" onClick={toggleFilterMenuOpen} />
            </div>
            <section className='filterMenu-section'>
                <div className='filterMenu-option'>
                    <div className='filterMenu-option-header' onClick={toggleCategoryOpen}>
                        <h3>Category / Tag</h3>
                        {isCategoryOpen ? (
                            <i className="fa-solid fa-caret-up"></i>
                        ) : (
                            <i className="fa-solid fa-caret-down"></i>
                        )}
                    </div>
                    {isCategoryOpen && (
                        <div className='filterMenu-option-checkboxes'>
                            {/* Map list of tags to input options */}
                            {tagList.map((tag, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        value={tag}
                                        checked={searchTags.includes(tag)}  // Check if the tag is selected
                                        onChange={handleTagChange}
                                    />
                                    {tag}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
