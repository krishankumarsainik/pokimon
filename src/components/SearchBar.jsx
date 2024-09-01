import "./index.css";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery, bookmarks }) => {
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        const selectedPokemon = e.target.value;
        if (selectedPokemon) {
            navigate(`/pokemon/${selectedPokemon}`);
        }
    };

    return (
        <>
            <div className="search-component" >
                <div className="heading" > Search Your Favourite Pokemon</div>
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="bookmark-select">
                    <select onChange={handleSelectChange}>
                        <option className="select-option" value=""> Your Bookmarked Pokémon</option>
                        {bookmarks.map((pokemon, index) => (
                            <option key={index} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
