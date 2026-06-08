import { useOutletContext } from "react-router-dom";

function Overview() {
  const { anime } = useOutletContext();

  if (!anime) {
    return <p className="loading">No anime data available.</p>;
  }

  return (
    <section className="overview-section fade-up">
      <div className="overview-grid">
        <div className="overview-card">
          <h3>Synopsis</h3>
          <p>{anime.synopsis || "No synopsis available."}</p>
        </div>

        <div className="overview-card">
          <h3>Basic Info</h3>
          <p><strong>Title:</strong> {anime.title || "N/A"}</p>
          <p><strong>Type:</strong> {anime.type || "N/A"}</p>
          <p><strong>Episodes:</strong> {anime.episodes || "N/A"}</p>
          <p><strong>Status:</strong> {anime.status || "N/A"}</p>
          <p><strong>Score:</strong> {anime.score || "N/A"}</p>
          <p><strong>Rank:</strong> {anime.rank || "N/A"}</p>
          <p><strong>Popularity:</strong> {anime.popularity || "N/A"}</p>
        </div>

        <div className="overview-card">
          <h3>Genres</h3>
          <div className="overview-tags">
            {anime.genres?.length ? (
              anime.genres.map((genre) => (
                <span key={genre.mal_id}>{genre.name}</span>
              ))
            ) : (
              <p>No genres available.</p>
            )}
          </div>
        </div>

        <div className="overview-card">
          <h3>More Details</h3>
          <p><strong>Source:</strong> {anime.source || "N/A"}</p>
          <p><strong>Rating:</strong> {anime.rating || "N/A"}</p>
          <p><strong>Season:</strong> {anime.season || "N/A"}</p>
          <p><strong>Year:</strong> {anime.year || "N/A"}</p>
          <p><strong>Duration:</strong> {anime.duration || "N/A"}</p>
          <p><strong>Studios:</strong> {anime.studios?.length ? anime.studios.map((studio) => studio.name).join(", ") : "N/A"}</p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
