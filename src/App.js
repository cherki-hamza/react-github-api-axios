
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Notfound404 from './components/Notfound404';
import Header from './components/layouts/Header';
import { Route, Routes } from 'react-router-dom';
import ApiData from './components/ApiData';
import Github from './components/Github';
import './App.css';

function App() {

  return (
    <div className="container">
      <Header />
      <div className='container my-5'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/github' element={<Github />} />
          <Route path='/api' element={<ApiData />} />
          <Route path='*' element={<Notfound404 />} />
        </Routes>


        <div className='container d-flex justify-content-center'>
          <span className='cherki_hamza_fotter '>make with Love by <a className='link' target="_blank" href='http://hamzacherki.com'>👨🏻‍💻 Cherki Hamza 🧡</a></span>
        </div>
      </div>

    </div>
  );
}

export default App;
