import movies from "../data/movies"
import { useState } from "react";

const MovieList = ({favMovie, setFavMovie}) => {

  const handleChange = (e) => {
    setFavMovie(e.target.value);
  }

  return (
    <div>
      {movies.map((movie) => (
          <div key={movie.title}>
          <label>
            <input 
            type="radio" 
            name="option"
            value={movie.title}
            checked={favMovie === movie.title}
            onChange={handleChange}
            />
            {movie.title}
          </label>
          </div>
        ))}
        <p>Selected: {favMovie || "None"}</p>

    </div>
  )
}

export default MovieList