import Footer from '../footer/footer.jsx';
import './main.css';

export default function Main() {
    return (
        <>
            <a>Films A-Z</a>
            <main className='main-container'>
                <header className='main-header'>FILMS A-Z <img src="src\assets\filter.png" alt="Results Filter"></img></header>
                <Footer />
            </main>
        </>
    )
}