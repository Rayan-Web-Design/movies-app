function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4 w-64">
      <img className="w-full h-80 object-cover" src={posterURL} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-yellow-500 font-bold">Rating: {rating} / 5</p>
      </div>
    </div>
  );
}

export default MovieCard;
