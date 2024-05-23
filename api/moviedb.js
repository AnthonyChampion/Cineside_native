import axios from "axios";
import { API_KEY } from "@env"


const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${API_KEY}`

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

const apiCall = async (endpoint, params) => {
    const options = {
        method: "GET",
        url: endpoint,
        params: params ? params : { language: "fr-FR", page: "" }
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log("error: ", error);
        return {}
    }
}
export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcommingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}