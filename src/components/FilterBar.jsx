function FilterBar({ type, setType }) {
  return (
    <div className="filter-bar">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="tv">TV</option>
        <option value="movie">Movie</option>
        <option value="ova">OVA</option>
        <option value="special">Special</option>
      </select>
    </div>
  );
}

export default FilterBar;
