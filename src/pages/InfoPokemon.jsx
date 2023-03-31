import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


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
            

            <div className=" infoCard_container">
                        {/* <div className="background_card1"></div>
                        <div className="background_card2"></div> */}
                        <div className="nameinfo"><h2>{poke.name}</h2></div>
                        <div className="stats">
                            <h3>hit Points {poke.stats?.[0].base_stat} / 150</h3>
                            <div className="bar_container"><div className="bar" style={{width: '75%'}}></div></div>
                            <h3> attack {poke.stats?.[1].base_stat} / 150</h3>
                            <div className="bar_container"><div className="bar" style={{width: '45%'}}></div></div>
                            <h3> defense {poke.stats?.[2].base_stat} / 150</h3>
                            <div className="bar_container"><div className="bar" style={{width: '90%'}}></div></div>
                            <h3> speed {poke.stats?.[5].base_stat} / 150</h3>    
                            <div className="bar_container"><div className="bar" style={{width: '65%'}}></div></div>
                        </div>
                        
                        <div className="icon_type_info"></div>
                        <div className="img_pokemoninfo">
                            <img src={poke.sprites?.other.dream_world.front_default} alt="image the pokemon" />
                            {/* <div className="img_pokemon1"></div> */}
                        </div>
                        <div className="type tInfo"><h3> Type</h3></div>
                        <div className="tInfo1"><h3>{poke.types?.[0].type.name}</h3></div>
                        <div className="tInfo2"><h3>{poke.types?.[1]?.type.name}</h3></div>
                        <div className="skill skillInf"><h3>skill</h3></div>
                        <div className="skillInf1"><h3>{poke.abilities?.[0].ability.name}</h3></div>
                        <div className="skillInf2"><h3>{poke.abilities?.[1]?.ability.name}</h3></div>
                    </div>

            {/* <h1>InfoPokemon</h1>
            {Poke.name}
            <img src={Poke.sprites?.other.dream_world.front_default} alt="image the pokemon" /> */}
            <div className="back" onClick={() => navigate(-1)}><img src="/back2.png" alt="image the back to" />Back</div>
        </div>
    );
};

export default InfoPokemon;