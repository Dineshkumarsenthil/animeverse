import { Link } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import { useAppContext } from "../context/AppContext";

function Watchlist() {
  const { watchlist } = useAppContext();

  return (
    <section className="section watchlist-section">
      <div className="container">
        <div className="watchlist-hero">
          <span className="watchlist-badge">Your Anime Collection</span>
          <h1 className="section-title">My Watchlist</h1>
          <p className="watchlist-subtext">
            Keep track of the anime you love and plan your next binge.
          </p>
        </div>

        <div className="watchlist-stats">
          <div className="watchlist-stat-card">
            <h3>{watchlist.length}</h3>
            <p>Total Saved</p>
          </div>
          <div className="watchlist-stat-card">
            <h3>{watchlist.length > 0 ? "Active" : "Empty"}</h3>
            <p>Status</p>
          </div>
          <div className="watchlist-stat-card">
            <h3>Anime</h3>
            <p>Category</p>
          </div>
        </div>

        {watchlist.length === 0 ? (
          <div className="watchlist-empty-card">
            <h2>Your watchlist is empty</h2>
            <p>
              Start exploring anime and add your favorite titles to build your
              personal anime collection.
            </p>
            <Link to="/anime" className="btn">
              Explore Anime
            </Link>
          </div>
        ) : (
          <div className="anime-grid">
            {watchlist.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Watchlist;
