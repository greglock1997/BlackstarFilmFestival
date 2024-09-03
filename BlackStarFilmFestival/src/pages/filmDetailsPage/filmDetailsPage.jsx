import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.jsx';
import './filmDetailsPage.css';

// Import to take data from url
import { useParams } from 'react-router-dom';

export default function FilmDetailsPage({ filmData }) {
    // Extract film id from url
    // then get specific item from filmData array using id
    const { id } = useParams();
    const film = filmData ? filmData.find(film => film.id === parseInt(id)) : '';

    const imageHtml = film.featured_image_rendered?.['rich-card-xl'] || '';
    const contentHtml = film.content?.rendered || '';


    console.log(film);
    return (
        <>
            {film ? (
                <div className='filmDetails-container'>
                    <header className='filmDetails-header'>
                        {film.title.rendered}
                        <Link to='/'>Back to results</Link>
                    </header>
                    <div className='filmDetails-films'>
                        <div className='filmDetails-image' dangerouslySetInnerHTML={{ __html: imageHtml }} />
                    </div>
                    <div className='filmDetails-description' dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <Footer />
                </div>
                ) : (
                    <main className='main-container'>
                    <header className='main-header'>
                        Film Not Found
                        <img
                        />
                    </header>
                    <div className='main-films'>
                        <h1>Try again</h1>
                    </div>
                    <button
                        className='main-loadMore'
                    >
                        Return to results
                    </button>
                    <Footer />
                </main>
                )
                }
        </>
    );
}