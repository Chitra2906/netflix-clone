import React from 'react'
import { useState, useEffect } from 'react'
import axios from './axios'
import "./row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseImgUrl = "https://image.tmdb.org/t/p/original"

    // for Youtube video
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie?.original_title || "")
                .then(function (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    < img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title} />

                )
                )}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

    )
}

export default Row
