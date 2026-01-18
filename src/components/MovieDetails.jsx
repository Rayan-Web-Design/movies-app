import { useParams, useNavigate } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <p className="text-center mt-10">Movie not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        <p className="mb-4 text-gray-700">{movie.description}</p>

        <iframe
          className="w-full h-80 mb-4"
          src={movie.trailer}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>

        <button
          onClick={() => navigate("/")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
