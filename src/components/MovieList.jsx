import movies from "../data/movies"

const MovieList = ({favMovie, setFavMovie}) => {

  const handleChange = (e) => {
    setFavMovie(e.target.value);
  }

  return (
   <fieldset className="flex flex-col gap-2 border p-3 rounded">
  <legend className="font-semibold text-gray-800">
    Select your favorite movie
  </legend>

  {movies.map((movie, index) => (
    <div key={movie.title} className="flex items-center gap-2 text-gray-700">
      <input
        type="radio"
        id={`movie-${index}`}
        name="favMovie"
        value={movie.title}
        checked={favMovie === movie.title}
        onChange={handleChange}
        className="w-4 h-4"
      />
      <label htmlFor={`movie-${index}`}>
        {movie.title} ({movie.year}) By {movie.director}
      </label>
    </div>
  ))}

  <p>
    Selected: <span className="font-bold">{favMovie || "None"}</span>
  </p>
</fieldset>

  )
}

export default MovieList