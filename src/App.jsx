import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending sci-fi movie",
      posterURL: "../public/images/HO00006781.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A journey through space and time",
      posterURL: "../public/images/p33624_v_v9_aa.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-6">
              <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">
                My Movie App
              </h1>
              <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <AddMovieForm addMovie={addMovie} />
                <Filter
                  setSearchTitle={setSearchTitle}
                  setSearchRating={setSearchRating}
                />
                <MovieList movies={filteredMovies} />
              </div>
            </div>
          }
        />

        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
