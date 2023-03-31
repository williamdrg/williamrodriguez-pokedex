import axios from 'axios';
import { useState } from 'react';
import PokemonCard from '../components/PokemonCard'
import FilteredByType from './FilteredByType';
import Pagination from './Pagination';

const PokemonsList = ({pokemons, setPokemons}) => {

    const [page, setPage] = useState(1)
    const onePage = 20


    const getFilteredBytype = (urlTypes) => {
        setPage(1)
        axios
            .get(urlTypes)
            .then(resp => setPokemons(resp.data))
            .catch(error => console.error(error))
        
    }

    const routePokemons = pokemons?.results || pokemons.pokemon;
    const countPokemons = pokemons?.count || pokemons.pokemon?.length;
    
    
    const totalPages = Math.ceil(countPokemons / onePage);
    
    
    const getShowPokemons = (pokemonList) => {
        const lastIndex = onePage * page;
        const firstIndex = lastIndex - onePage;
        return pokemonList?.slice(firstIndex, lastIndex);
    }
    
    const getPagination = (totalPages) => {
        const maxPages = 10;
        const start = Math.max(1, Math.min(page - 6, totalPages - maxPages + 1));
        const end = Math.min(start + maxPages - 1, totalPages); 
        const pagination = [];
        for (let i = start; i <= end; i++) {
          pagination.push(i);
        }
        return pagination;
    }

    const showPokemons = getShowPokemons(routePokemons);
    const arrayPage = getPagination(totalPages);


    return (
        <div>
            <FilteredByType
                getType = {getFilteredBytype}
            />
            <div className="cards_container">
                {
                showPokemons?.map( pokemon => (
                        <PokemonCard
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </div>
            <div className="page_container">
                {   
                    arrayPage.map( num => (
                        <Pagination
                        key={num}
                        num = {num}
                        setPage = {setPage}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default PokemonsList;