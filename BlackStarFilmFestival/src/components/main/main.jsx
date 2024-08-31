import Footer from '../footer/footer.jsx';
import FilmCard from '../filmCard/filmCard.jsx';
import './main.css';

export default function Main({filmData}) {
    return (
        <>
            <main className='main-container'>
                <header className='main-header'>FILMS A-Z <img src="src/assets/filter.png" alt="Results Filter" /></header>
                <div className='main-films'>
                    {filmData && filmData.length > 0 ? (
                        filmData.map((film) => (
                            <FilmCard film={film}/>
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
