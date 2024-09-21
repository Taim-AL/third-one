import './assets/Style.css';
import React from 'react';
import {BrowserRouter,Route , Routes} from 'react-router-dom';
import Home from './section/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './section/Contact';
import About from './section/About';
import Services from './section/Services';
import 'aos/dist/aos.css';


function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} index />
          <Route element={<Contact/>} path='/contact' />
          <Route element={<About/>} path='/about' />
          <Route element={<Services/>} path='/services' />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;