import axios from "axios";
import { useEffect, useState } from "react";


const FilteredByType = ({getType}) => {

    const [type, setType] = useState({})

    useEffect(()=> {
        axios
            .get("https://pokeapi.co/api/v2/type/")
            .then(resp => setType(resp.data))
            .catch(error => console.error(error))
    },[])

    


    return (
        <div className="content_select">
            <select
                onChange={e => getType(e.target.value)}
            >
                <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">All Pokemons</option>
            {
                type.results?.map( element =>(
                    <option value={element.url} 
                        key={element.url}
                    >
                        {element.name}
                    </option>
                ))
            }
            </select>
            <i></i>
            
        </div>
    );
};

export default FilteredByType;