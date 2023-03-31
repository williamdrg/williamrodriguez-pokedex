import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import typePokemon from "../data/typePokemon.json"

const PokemonCard = ({url}) => {

    const [poke, setPoke] = useState({})
    const [ability, setAbility] = useState({})
    const navigate = useNavigate()


    useEffect(()=> {
        axios 
            .get(url)
            .then(resp => {
                setPoke(resp.data)
        axios
            .get(resp.data.abilities?.[0].ability.url)
            .then(resp => setAbility(resp.data)) 
        })    
            .catch(error => console.log(error))
    },[])


    return (
        <div onClick={() => navigate(`/pokedex/${poke.id}`)}>
          
                <div className="perspetive">
                        <div className="rotate_card3"></div>
                    <div className="background_card" style={{backgroundImage: `url(${typePokemon[1][poke.types?.[0].type.name]})`}}>
                        <div className="background_card1"></div>
                        <div className="background_card2"></div>
                        <div className="name_card"><h2>{poke.name}</h2></div>
                        <div className="life"><h3>{poke.stats?.[0].base_stat} HP</h3></div>
                        <div className="icon_type" style={{backgroundImage: `url(${typePokemon[0][poke.types?.[0].type.name]})`}}></div>
                        <div className="img_pokemon">
                            <img src={poke.sprites?.other.dream_world.front_default ||  poke.sprites?.other.home.front_default || poke.sprites?.front_default || '/pokebola.png'} alt="image the pokemon" />
                            <div className="img_pokemon1"></div>
                        </div>
                        <div className="description"><h3>{ability.flavor_text_entries?.[0]?.flavor_text}</h3></div>
                        <div className="skill"><h3>skill: {poke.abilities?.[0].ability.name}</h3></div>
                        <div className="skill_detail"><h3>{ability.effect_entries?.[0]?.short_effect}</h3></div>
                        <div className="type"><h3> Type: {poke.types?.[0].type.name}</h3></div>
                        <div className="weight"><h3>{poke.weight} Hg</h3></div>
                        <div className="power">
                            <h3> ATK {poke.stats?.[1].base_stat} ⚔️</h3>
                            <h3> DEF {poke.stats?.[2].base_stat} 🛡️</h3>
                            <h3> SPE {poke.stats?.[5].base_stat} 🏃‍♀️</h3>    
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default PokemonCard;