import { useEffect, useState } from 'react';

const BookmarkList = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(storedBookmarks);
    }, []);

    return (
        <div>
            <h2>Bookmarked Pokémon</h2>
            {bookmarks.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}
        </div>
    );
};

export default BookmarkList;
