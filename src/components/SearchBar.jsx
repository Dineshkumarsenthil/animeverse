function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
