import { useState } from "react"
import InputBox from "../components/InputBox"
import MovieList from "../components/MovieList.jsx";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favMovie, setFavMovie] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset Form
  const handleReset = () => {
    setName("");
    setEmail("");
    setFavMovie("");
    setComment("");
  }
  
  return (
    <div>
      <h1>Favourite Movie Survey</h1>
      <form>
        {/* Name */}
        <label>
          Name
          <InputBox 
          inputType="text" 
          placeHolder="Enter your first name here"/>
        </label>

        {/* Email */}
        <label>
          Email
          <InputBox 
          inputType="email"
          placeHolder="Enter your email here"
          />
        </label>

        {/* Movie Radio Options */}
        <h2>Choose your favourite movie</h2>
        <MovieList /> 

        {/* Comment Section */}
        <label>
          Leave your comment (optional)
          <textarea 
          placeholder="Enter your comment here"
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          >
          </textarea>
        </label>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default Form