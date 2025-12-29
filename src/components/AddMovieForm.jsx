import { useState } from "react";

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  const increment = () => setRating((prev) => (prev < 5 ? prev + 1 : 5));
  const decrement = () => setRating((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
        className="p-2 border rounded-md"
      />

      {/* Rating Buttons */}
      <div className="flex items-center gap-4">
        <span className="font-semibold">Rating: {rating}</span>
        <button
          type="button"
          onClick={decrement}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          -
        </button>
        <button
          type="button"
          onClick={increment}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
        >
          +
        </button>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition mt-2"
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovieForm;
