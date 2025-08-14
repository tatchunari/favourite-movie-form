import { useState } from "react"
import MovieList from "../components/MovieList.jsx";
import WarningMessage from "../components/WarningMessage.jsx";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favMovie, setFavMovie] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // For email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset Form
  const handleReset = () => {
    setName("");
    setEmail("");
    setFavMovie("");
    setComment("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (
    !name.trim() ||
    !email.trim() ||
    !comment.trim() ||
    !emailRegex.test(email)
  ) {
    return; // stop here if any field is invalid
  }
  }
  
  return (
    <div>
      <h1>Favourite Movie Survey</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Name
          <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded border-gray-500/30 w-full max-w-m">
          <input 
          type="text" 
          placeholder="Enter your first name here"
          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          />
          </div>
        </label>
        {submitted && !name.trim() && (
          <WarningMessage inputType="Name"/>
          )}

        {/* Email */}
        <label>
          Email
          <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded border-gray-500/30 w-full max-w-m">
          <input 
          type="email"
          placeholder="Enter your email here"
          className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
          </div>
        </label>

        {/* Movie Radio Options */}
        <h2>Choose your favourite movie</h2>
        <MovieList 
        favMovie={favMovie}
        setFavMovie={setFavMovie}
        onChange={(e) => {setFavMovie(e.target.value)}}
        /> 

        {/* Comment Section */}
        <label>
          Leave your comment (optional)
          <textarea 
          placeholder="Enter your comment here"
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          value={comment}
          onChange={(e) => {setComment(e.target.value)}}
          >
          </textarea>
        </label>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-4 md:gap-10">

        {/* Submit Button */}
        <button 
        type="submit"
        className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-slate-700"
        >
          Submit Form
        </button>

        {/* Reset Form Button */}
        <button 
        onClick={handleReset}
        className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-lg bg-indigo-500"
        >
          Reset
        </button>
        </div>
      </form>
    </div>
  )
}

export default Form