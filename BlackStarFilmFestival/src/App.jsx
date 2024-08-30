import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <Header />
        <Main>
          <Footer />
        </Main>
      </div>
    </>
  )
}

export default App