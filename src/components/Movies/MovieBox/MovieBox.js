import React from "react";
import "./MovieBox.css";
import MovieInterface from "../../movieInterface/movieInterface";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieBox = ({ inputValue }) => {
  const [currentMovie, setCurrentMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=d97e8640"
      );
      const fetchedMovie = res.data;
      setCurrentMovie(fetchedMovie);
    };
    getMovie();
  }, []);

  function search() {
    if (currentMovie !== {} && inputValue) {
      return currentMovie.Title.toLowerCase().includes(inputValue.toLowerCase());
    }
  }
  
  return (
    <div className="moviebox">
      {search() ? (
        <MovieInterface
          title={currentMovie.Title}
          image={currentMovie.Poster}
        />
      ) : (
        <>
          <section>
            <h2>{currentMovie.Genre}</h2>
            <div className="movie-roll-container">
              <div className="movie-roll">
                {Array(5).fill(
                  <MovieInterface
                    title={currentMovie.Title}
                    image={currentMovie.Poster}
                  />
                )}
              </div>
            </div>
          </section>
          <section>
            <h2>{currentMovie.Genre}</h2>
            <div className="movie-roll-container">
              <div className="movie-roll">
                {Array(5).fill(
                  <MovieInterface
                    title={currentMovie.Title}
                    image={currentMovie.Poster}
                  />
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieBox;
