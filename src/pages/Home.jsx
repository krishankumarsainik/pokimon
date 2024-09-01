import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [bookmarks, setBookmarks] = useState([]); // Initialized as an empty array

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(storedBookmarks);
    }, []);

    const handleBookmark = (pokemon) => {
        const newBookmarks = [...bookmarks, pokemon];
        setBookmarks(newBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    };

    return (
        <div className="home-container">
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                bookmarks={bookmarks}
            />
            <PokemonList
                searchQuery={searchQuery}
                onBookmark={handleBookmark}
            />
        </div>
    );
};

export default Home;

