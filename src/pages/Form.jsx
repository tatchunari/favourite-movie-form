import { useState } from "react"
import MovieList from "../components/MovieList.jsx";
import WarningMessage from "../components/WarningMessage.jsx";
import { validateForm } from "../utils/validateForm.js"

const Form = ({setFormData}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favMovie, setFavMovie] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Reset Form
  const handleReset = () => {
    setName("");
    setEmail("");
    setFavMovie("");
    setComment("");
    setSubmitted(false);
    // setFormData(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formErrors = validateForm({ name, email, favMovie });

    if (Object.keys(formErrors).length > 0) return;

   setFormData({
    name,
    email,
    favMovie,
    comment,
  });

  // New Form Data
  const formData = {
    name: name,
    email: email,
    favMovie: favMovie,
    comment: comment,
  }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">🎬 Favourite Movie Survey 🎬</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <label className="flex flex-col text-gray-700 text-sm">
            Name
            <input 
              type="text"
              placeholder="Enter your first name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition"
            />
            {submitted && !name.trim() && (
              <WarningMessage message="Name is required" />
            )}
          </label>

          {/* Email */}
          <label className="flex flex-col text-gray-700 text-sm">
            Email
            <input 
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 transition"
            />
            {submitted && !email.trim() && (
              <WarningMessage message="Email is required" />
            )}
            {submitted && email && !emailRegex.test(email) && (
              <WarningMessage message="Invalid Email Format" />
            )}
          </label>

          {/* Movie Radio Options */}
          <div className="text-gray-700">
            <h2 className="mb-2 font-semibold">Choose your favourite movie</h2>
            <MovieList 
              favMovie={favMovie}
              setFavMovie={setFavMovie}
            />
            {submitted && !favMovie.trim() && (
              <WarningMessage message="Please choose your favourite movie" />
            )}
          </div>

          {/* Comment Section */}
          <label className="flex flex-col text-gray-700 text-sm">
            Leave your comment (optional)
            <textarea 
              placeholder="Enter your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 px-3 py-2 h-32 border border-gray-300 rounded resize-none focus:outline-none focus:border-indigo-500 transition"
            />
          </label>

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              type="submit"
              className="flex-1 py-3 text-white bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-800 transition"
            >
              Submit Form
            </button>
            <button 
              type="button"
              onClick={handleReset}
              className="flex-1 py-3 text-white bg-indigo-500 rounded-lg text-sm font-medium hover:bg-indigo-600 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Form