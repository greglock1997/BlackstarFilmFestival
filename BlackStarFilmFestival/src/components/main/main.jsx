import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import FilmCard from '../filmCard/filmCard.jsx';
import FilterMenu from '../filterMenu/filterMenu.jsx';
import Tab from '../tab/tab.jsx';
import './main.css';

export default function Main({ filmData, searchTags, updateSearchTags, updateNumberOfResults }) {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);

    const toggleFilterMenuOpen = () => {
        setFilterMenuOpen(!filterMenuOpen);
    };

    return (
        <>
            <main className='main-container'>
                <Tab />
                <header className='main-header'>
                    FILMS A-Z
                    <img
                        src="src/assets/filter.png"
                        alt="Results Filter"
                        onClick={toggleFilterMenuOpen}
                    />
                </header>
                {filterMenuOpen &&
                    <FilterMenu
                        toggleFilterMenuOpen={toggleFilterMenuOpen}
                        searchTags={searchTags}
                        updateSearchTags={updateSearchTags}
                    />
                }
                <div className='main-films'>
                    {/* Check for data, display loading screen */}
                    {filmData === null ? (
                        <h1>Loading films...</h1>
                    ) : (
                        filmData && filmData.length > 0 ? (
                            filmData.map((film) => (
                                <FilmCard film={film} />
                            ))
                        ) : (
                            <h1>No films found</h1>
                        )
                    )}
                </div>
                <button
                    className='main-loadMore'
                    onClick={updateNumberOfResults}
                >
                    Load More
                </button>
                <Footer />
            </main>
        </>
    );
}