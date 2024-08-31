import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';



function App() {
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wp.blackstarfest.org/wp-json/wp/v2/festival-film?per_page=9&page=1&_year=2024&rich=1&not_hidden=1');
        
        const data = await response.json();
        
        console.log(data);
        
        setFilmData(data);
      } catch (error) {
        console.log('Error retrieving data from API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <Header />
        <Main filmData={filmData}/>
      </div>
    </>
  )
}

export default App