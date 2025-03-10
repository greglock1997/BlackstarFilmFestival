// Import <Link /> element and useParams function from react router
import { Link, useParams } from 'react-router-dom';

// Import components
import Tab from '../../components/tab/tab.jsx';
import Footer from '../../components/footer/footer.jsx';

// Import stylesheet
import './filmDetailsPage.css';

export default function FilmDetailsPage({ filmData }) {
    // Extract film id from url
    // then get specific item from filmData array using id
    const { id } = useParams();
    const film = filmData ? filmData.find(film => film.id === parseInt(id)) : '';

    const imageHtml = film.featured_image_rendered ? film.featured_image_rendered['rich-card-xl'] : '';
    const contentHtml = film.content ? film.content.rendered : '';

    return (
        <>
            {film ? (
                <div className='filmDetails-container'>
                    <Tab />
                    <header className='filmDetails-header'>
                        {film.title.rendered}
                        <Link to='/'><i class="fa-solid fa-arrow-left"></i> Back to results</Link>
                    </header>
                    <div className='filmDetails-films'>
                        <div className='filmDetails-image' dangerouslySetInnerHTML={{ __html: imageHtml }} />
                    </div>
                    <div className='filmDetails-description' dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    <Footer />
                </div>
            ) : (
                <div className='filmDetails-container'>
                    <Tab />
                    <header className='filmDetails-header'>
                        <h1>Film Not Found</h1>
                    </header>
                    <Link to='/'><i class="fa-solid fa-arrow-left"></i> Back to results</Link>
                    <Footer />
                </div>
            )
            }
        </>
    );
}