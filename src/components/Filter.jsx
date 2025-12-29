function Filter({ setSearchTitle, setSearchRating }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-4">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
        className="p-2 border rounded-md flex-1"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setSearchRating(Number(e.target.value))}
        className="p-2 border rounded-md w-32"
      />
    </div>
  );
}

export default Filter;
