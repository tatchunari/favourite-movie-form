import movies from "../data/movies"
import { useState } from "react";

const MovieList = () => {

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
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
            checked={selectedOption === movie.title}
            onChange={handleChange}
            />
            {movie.title}
          </label>
          </div>
        ))}
        <p>Selected: {selectedOption || "None"}</p>

    </div>
  )
}

export default MovieList