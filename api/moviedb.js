import axios from "axios";

const apikey = process.env.API_KEY

const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/movie/now_playing?api_key=${apikey}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apikey}`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apikey}`
const searchMoviesEndPoint = `${apiBaseUrl}/search/movie?api_key=${apikey}`

const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apikey}`
const movieCreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apikey}`
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apikey}`

const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${apikey}`
const personMoviesEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apikey}`

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null;
export const backdrop = path => path ? `https://image.tmdb.org/t/p/original${path}` : null;

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
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}
export const searchMovies = params => {
    return apiCall(searchMoviesEndPoint, params);
}
export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndpoint(id));
}

export const fetchMovieCredits = id => {
    return apiCall(movieCreditsEndpoint(id));
}

export const fetchSimilarMovies = id => {
    return apiCall(similarMoviesEndpoint(id));
}

export const fetchPersonDetails = id => {
    return apiCall(personDetailsEndpoint(id));
}

export const fetchPersonMovies = id => {
    return apiCall(personMoviesEndpoint(id));
}