import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 151) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon?limit=${limit}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
    }
};

export const fetchPokemonDetail = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
    }
};
