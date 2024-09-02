import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';



function App() {
  const [searchTags, setSearchTags] = useState([]);
  const [filmData, setFilmData] = useState(null);

  const updateSearchTags = (newTags) => {
    setSearchTags(newTags);
  };

  useEffect(() => {
    console.log(searchTags);
    const fetchData = async () => {
      try {
        // Combine tags array into string
        const tagQueryString = searchTags.length > 0 ? `&search=${searchTags.join(',')}` : '';
        const response = await fetch(`https://wp.blackstarfest.org/wp-json/wp/v2/festival-film?per_page=10&page=1&_year=2024&rich=1&not_hidden=1${tagQueryString}`);
        const data = await response.json();
        
        setFilmData(data);
      } catch (error) {
        console.log('Error retrieving data from API', error);
      }
    };

    fetchData();
  }, [searchTags]);

  return (
    <>
      <div className='container'>
        <Header />
        <Main 
          filmData={filmData}
          searchTags={searchTags}
          updateSearchTags={updateSearchTags}
        />
      </div>
    </>
  )
}

export default App