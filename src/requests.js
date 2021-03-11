// base URL: https://api.themoviedb.org/3
// requests
// /movie/top_rated?api_key=8d784892729e3786e4f7c1197614252a&language=en-US&page=1
// /movie/popular?api_key=8d784892729e3786e4f7c1197614252a&language=en-US&page=1
// /movie/latest?api_key=8d784892729e3786e4f7c1197614252a&language=en-US
const api_key = "8d784892729e3786e4f7c1197614252a";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflix: `/discover/tv?api_key=${api_key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
    fetchFamilyMovies: `/discover/movie?api_key=${api_key}&with_genres=10751`,
    fetchHistoryMovies: `/discover/movie?api_key=${api_key}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchMusicMovies: `/discover/movie?api_key=${api_key}&with_genres=10402`,
    fetchWarMovies: `/discover/movie?api_key=${api_key}&with_genres=10752`
}
export default requests
