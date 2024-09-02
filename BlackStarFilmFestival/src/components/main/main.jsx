import { useState } from 'react';
import Footer from '../footer/footer.jsx';
import FilmCard from '../filmCard/filmCard.jsx';
import FilterMenu from '../filterMenu/filterMenu.jsx';
import './main.css';

export default function Main({ filmData, searchQuery, setSearchQuery }) {
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);

    const toggleFilterMenuOpen = () => {
        setFilterMenuOpen(!filterMenuOpen);
    };

    return (
        <>
            <main className='main-container'>
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
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                }
                <div className='main-films'>
                    {filmData && filmData.length > 0 ? (
                        filmData.map((film) => (
                            <FilmCard film={film} />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <Footer />
            </main>
        </>
    );
}
