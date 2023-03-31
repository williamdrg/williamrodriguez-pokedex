import './App.css'
import Pokedex from './pages/Pokedex'
import InfoPokemon from './pages/InfoPokemon'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {
  

  return (
    
    <HashRouter>
      <div className="App">
                     
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />

        <Route
        element={<ProtectedRoutes/>}
        >
        
          <Route
            path='/pokedex'
            element={<Pokedex/>}
            />
          


          <Route
            path='/pokedex/:id'
            element={<InfoPokemon/>}
          />
        </Route>
        


      </Routes>

      </div>
    </HashRouter>
    
  )
}

export default App
