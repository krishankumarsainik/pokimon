import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../services/api';
import { Loader } from "../utils/Loader"
const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [bookmark, setBookmark] = useState("Bookmak");
    const getPokemonDetail = async () => {
        const data = await fetchPokemonDetail(name);
        setPokemon(data);
    };
    useEffect(() => {
        getPokemonDetail();
    }, [name]);

    const handleBookmark = (pokemon) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        if (!bookmarks.some(bookmarkedPokemon => bookmarkedPokemon.name === pokemon.name)) {
            bookmarks.push(pokemon);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
        setBookmark("Bookmaked")
    };

    return (
        <div>
            {pokemon ? (
                <div className="details-container" >
                    <div>
                        <h1>{pokemon.name}</h1>
                        <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <div className="pokemon-details"  >
                            <p>Height: {pokemon.height}</p>
                            <p>Weight: {pokemon.weight}</p>
                        </div>
                        <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                        <button className="bookmark-button" onClick={() => handleBookmark(pokemon)}>{bookmark}</button>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};


export default PokemonDetail;
