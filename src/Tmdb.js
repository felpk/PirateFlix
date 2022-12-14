const API_KEY = 'http://localhost:3000/';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}$(endpoint)`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movies/top_rated?language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_gentes=26&language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_gentes=35&language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_gentes=27&language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_gentes=10&language=pt-BR&api_keys=${API_KEY}`)
        },
        {  
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_gentes=99&language=pt-BR&api_keys=${API_KEY}`)
        },
    }
}