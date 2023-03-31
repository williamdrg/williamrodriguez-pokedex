import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonsList from "../components/PokemonsList";


const Pokedex = () => {
  
  const userName = useSelector(state => state.userName)
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [showGif, setShowGif] = useState(true)

  useEffect (()=> {
    getPokemons()
    setTimeout(() => {
      setShowGif(false)
    }, 9000);

  },[])

  const getPokemons = () => {
    axios
        .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281')
        .then(resp => setPokemons(resp.data))
        .catch(error => console.error(error))
  }

  return (
    <div className="poke_card_container">
      <div className="upper_bar">
        <div className="line_circle circle1"></div>
        <div className="line_circle circle2"></div>
        <div className="line_circle circle3"></div>
        <div className="line_circle circle4"></div>
      </div>

        <div className="bottom_bar">
          <div className="line_circle circle5"></div>
          <div className="line_circle circle6"></div>
          <div className="line_circle circle7"></div>
          <div className="line_circle circle8"></div>
        </div>

        <div className="fondo_glass"><img src="/fondopokedex.png" alt="" /></div>
      <div className="fondo_pokedex"><img src={showGif ? "/animacionPoke.gif" : "/circle.png"} alt="" /></div>
      <div className="back" onClick={() => navigate(-1)}><img src="/back2.png" alt="image the back to" />Back</div>
      <div className="title_card"> <h1>welcome <span>{userName}</span>, here you can find your favorite pokemon </h1> </div>
      
      <div className="input2_container"> 
        <input type="text"
          onChange={e => setSearch(e.target.value)}
          value = {search}
          className="input input2"
        /> 

        <button 
          onClick={() => navigate(`/pokedex/${search}`)}
          className="btn2"
        >
          <img src="/sear.png" alt="" />
        </button>
      </div>

      
      <div className="card_container">
        <PokemonsList
          pokemons = {pokemons}
          setPokemons = {setPokemons}
        />
      </div>
      

    </div>
);
}

export default Pokedex;
