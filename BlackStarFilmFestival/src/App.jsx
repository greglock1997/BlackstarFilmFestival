import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import FilmDetailsPage from './pages/filmDetailsPage/filmDetailsPage.jsx';

function App() {
  const [numberOfResults, setNumberOfResults] = useState(10);
  const [searchTags, setSearchTags] = useState([]);
  const [filmData, setFilmData] = useState(null);

  const updateNumberOfResults = () => {
    setNumberOfResults(numberOfResults + 10);
  }

  const updateSearchTags = (newTags) => {
    setSearchTags(newTags);
  };

  useEffect(() => {
    console.log(searchTags);
    console.log(filmData);
    const fetchData = async () => {
      try {
        // Combine tags array into string
        const tagQueryString = searchTags.length > 0 ? `&search=${searchTags.join(',')}` : '';
        const response = await fetch(`https://wp.blackstarfest.org/wp-json/wp/v2/festival-film?per_page=${numberOfResults}&page=1&_year=2024&rich=1&not_hidden=1${tagQueryString}`);
        const data = await response.json();

        setFilmData(data);
      } catch (error) {
        console.log('Error retrieving data from API', error);
      }
    };

    fetchData();
  }, [searchTags, numberOfResults]);

  return (
    // Two pages, one for results, one for specific film details
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                filmData={filmData}
                searchTags={searchTags}
                updateSearchTags={updateSearchTags}
                updateNumberOfResults={updateNumberOfResults}
              />
            }
          />

          <Route
            path="/film/:id"
            element={<FilmDetailsPage filmData={filmData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App