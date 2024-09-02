import './filmCard.css';

export default function FilmCard({ film = {} }) {
    const imageHtml = film.featured_image_rendered?.card || '';
    const title = film.title?.rendered || 'No Title';

    return (
        <div className='filmCard'>
            {/* Couldn't figure out a way to extract an image src from the API data, refactor later */}
            {imageHtml ? (
                // Render image using the HTML provided by API data
                <div className='filmCard-image' dangerouslySetInnerHTML={{ __html: imageHtml }} />
            ) : (
                <h1>Image not found</h1>
            )}
            <div className='filmCard-info'>
                <h1 className='filmCard-title'>{title}</h1>
                <p>{film.type}</p>
                <p>{film.acf.credits[0].name}</p>
                <p>Runtime: {film.acf.runtime}</p>
            </div>
            <div className='filmCard-links-acessibility'>
                <div className='filmCard-links'>
                    {/* Add links at later point */}
                    <a href=''>Read More</a>
                    <a href=''>Watch Trailer</a>
                </div>
                <div className='filmCard-accessibility'>
                    <div><p>AD</p></div>
                    <div><p>CC</p></div>
                    <div><p>!</p></div>
                </div>
            </div>
        </div>
    );
}