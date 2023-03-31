import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import typePokemon from "../data/typePokemon.json"


const InfoPokemon = () => {

    const navigate = useNavigate()
    const userName = useSelector(state => state.userName)
    const {id} =useParams()
    const [poke, setPoke] = useState({})

 
    useEffect(()=> {
        axios 
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(resp => setPoke(resp.data))
            .catch(error => console.log(error))
    },[])

    const moves = poke.moves

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

            <div className="fondo_glass"><img src="/fondopokedex.png" alt="imagen the fund" /></div>
            <div className="fondo_pokedex rrr"><img src="/fondoblue.svg" alt="image the fund" /></div>
            

            <div className="infoCard_container">
                    
                <div className="nameinfo"><h2>{poke.name}</h2></div>
                <div className="stats">
                    <h3>hit Points <span>{poke.stats?.[0].base_stat}/150</span></h3>
                    <div className="bar_container"><div className="bar" style={{width: `${poke.stats?.[0].base_stat*1/1.5}%`}}></div></div>
                    <h3> attack <span>{poke.stats?.[1].base_stat}/150</span></h3>
                    <div className="bar_container"><div className="bar" style={{width: `${poke.stats?.[1].base_stat*1/1.5}%`}}></div></div>
                    <h3> defense <span>{poke.stats?.[2].base_stat}/150</span></h3>
                    <div className="bar_container"><div className="bar" style={{width: `${poke.stats?.[2].base_stat*1/1.5}%`}}></div></div>
                    <h3> speed <span>{poke.stats?.[5].base_stat}/150</span></h3>    
                    <div className="bar_container"><div className="bar" style={{width: `${poke.stats?.[5].base_stat*1/1.5}%`}}></div></div>
                </div>
                
                <div className="icon_type_info" style={{backgroundImage: `url(${typePokemon[0][poke.types?.[0].type.name]})`}}></div>
                <div className="img_pokemoninfo">
                    <img src={poke.sprites?.other.dream_world.front_default} alt="image the pokemon" />
                </div>
                <div className="type tInfo"><h3> Type</h3></div>
                <div className="tInfo1"><h3>{poke.types?.[0].type.name}</h3></div>
                <div className="tInfo2"><h3>{poke.types?.[1]?.type.name}</h3></div>
                <div className="skill skillInf"><h3>skill</h3></div>
                <div className="skillInf1"><h3>{poke.abilities?.[0].ability.name}</h3></div>
                <div className="skillInf2"><h3>{poke.abilities?.[1]?.ability.name}</h3></div>
            </div>

            <div className="infoCard_container movements">
                {
                    moves?.slice(0, 20).map( m => (
                        <div className="movement" key={m.move.url}><h3>{m.move.name}</h3></div>
                    )) 
                }
            </div>

            <div className="back" onClick={() => navigate(-1)}><img src="/back2.png" alt="image the back to" />Back</div>
        
        </div>
    );
};

export default InfoPokemon;