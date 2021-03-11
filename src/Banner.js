import React, { useEffect, useState } from 'react'
import axios from "./axios"
import requests from './requests';
import "./Banner.css";

function Banner() {
    // fetching a random movie to set as a banner 
    //value to be used is movie .
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflix);
            // console.log(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))]);
            // console.log(Math.floor(Math.random() * (request.data.results.length - 1)));
            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))]
            );
        }
        fetchData();

    }, []);
    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };


    return (
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <div className="banner_contents">
                {/* background would be a picture of the randomly fetched movie 
            <title > --<div with 2 buttons > ---<description of movie>
            */}
                <h1 className="banner__title">{movie?.original_title || movie?.name || movie?.title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>

                </div>
                <h1 className="banner__description">
                    {/* {movie.overview} */}
                    {truncate(movie?.overview, 150)}
                </h1>

            </div>
            <div className="banner__fadebottom"></div>
        </header>
    )
}

export default Banner
