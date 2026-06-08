import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function AnimeCard({ anime }) {
  const { addToWatchlist } = useAppContext();

  return (
    <div className="anime-card">
      <img src={anime.images?.jpg?.image_url} alt={anime.title} />
      <div className="anime-card-content">
        <h3>{anime.title}</h3>
        <p>Type: {anime.type || "N/A"}</p>
        <p>Score: {anime.score || "N/A"}</p>
        <div className="card-actions">
          <Link to={`/anime/${anime.mal_id}`} className="btn small">
            View Details
          </Link>
          <button className="btn-outline small" onClick={() => addToWatchlist(anime)}>
            + Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
