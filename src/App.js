import Header from './header'
import About from './about'
import { Usestate } from 'react'
import Services from './services'
import Feedback from './feedback'
import Home from './home'
import F from './f'
import Doors from './doors'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Contact from './contact'
import Openable from './openable'
import Slider from './slider'
import Tilt from './tilt'
import Staking from './staking'
import Kitchen from './kitchen'
import Office from './office'

import Footer from './footer'
import './App.css'
import './index.css'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>

          <Route path='/services' element={<Services />}></Route>
          <Route path='/doors' element={<Doors />}></Route>
          <Route path='/openable' element={<Openable />}></Route>
          <Route path='/slider' element={<Slider />}></Route>
          <Route path='/tilt' element={<Tilt />}></Route>
          <Route path='/staking' element={<Staking />}></Route>
          <Route path='/kitchen' element={<Kitchen />}></Route>
          <Route path='/office' element={<Office />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
