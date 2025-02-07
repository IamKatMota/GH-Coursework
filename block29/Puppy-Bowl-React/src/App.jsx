import AllPlayers from './components/AllPlayers'
import { Routes, Route } from "react-router-dom"
import './App.css'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import SearchPlayer from './components/SearchPlayer'

function App() {
  

  return (
    <>
      <SearchPlayer />
      <NewPlayerForm />

      <Routes>
        <Route path='/' element = {< AllPlayers />}></Route>
        <Route path='/players/:id' element ={< SinglePlayer />}></Route>
      </Routes>
    </>
  )
}

export default App
