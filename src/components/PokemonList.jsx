import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../services/api';
import "./index.css";

import { Link } from 'react-router-dom';

const PokemonList = ({ searchQuery }) => {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemonList = async () => {
        const data = await fetchPokemonList();
        setPokemonList(data);
        console.log("eeeeeeeeee", data)
    };
    useEffect(() => {
        getPokemonList();
    }, []);

    const filteredPokemonList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="list-container" >
            {filteredPokemonList.map((pokemon, index) => (
                <Link key={index} to={`/pokemon/${pokemon.name}`}>
                    <div>{pokemon.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default PokemonList;
