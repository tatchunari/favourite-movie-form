import movies from "../data/movies"

const MovieList = ({favMovie, setFavMovie}) => {

  const handleChange = (e) => {
    setFavMovie(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2">
      {movies.map((movie) => (
          <div 
          key={movie.title}
          className="flex items-center gap-2 text-gray-700">
            <input 
            type="radio" 
            name="option"
            value={movie.title}
            checked={favMovie === movie.title}
            onChange={handleChange}
            className="w-4 h-4"
            />
            <label>
            {movie.title} ({movie.year}) By {movie.director}
          </label>
          </div>
        ))}
        <p>Selected: <span className="font-bold">{favMovie || "None"}</span></p>

    </div>
  )
}

export default MovieList