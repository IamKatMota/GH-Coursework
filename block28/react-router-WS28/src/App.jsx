import { Routes, Route } from "react-router-dom"
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import NavBar from './components/NavBar'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blue' element={<Blue />} />

          <Route path='/red' element={<Red />} />

        </Routes>
      </div>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
