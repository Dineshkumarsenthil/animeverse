import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Anime() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTopAnime = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=12");
      const data = await res.json();
      setAnimeList(data.data || []);
    } catch (error) {
      console.error("Error fetching top anime:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchedAnime = async () => {
    if (!search.trim()) {
      fetchTopAnime();
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(search)}&limit=12`
      );
      const data = await res.json();
      setAnimeList(data.data || []);
    } catch (error) {
      console.error("Error searching anime:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopAnime();
  }, []);

  const handleSearch = () => {
    fetchSearchedAnime();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchSearchedAnime();
    }
  };

  const openTrailer = (anime) => {
    if (anime.trailer?.url) {
      window.open(anime.trailer.url, "_blank");
    } else if (anime.trailer?.embed_url) {
      window.open(anime.trailer.embed_url, "_blank");
    } else if (anime.trailer?.youtube_id) {
      window.open(`https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`, "_blank");
    } else {
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          `${anime.title} trailer`
        )}`,
        "_blank"
      );
    }
  };

  return (
    <section className="section anime-page-section">
      <div className="container">
        <div className="anime-page-hero fade-up">
          <span className="anime-page-badge">Explore Animeverse</span>
          <h2 className="anime-page-title">Explore the World of Anime</h2>
          <p className="anime-page-subtitle">
            Browse popular series, legendary classics, and underrated gems with a smooth and immersive anime discovery experience.
          </p>

          <div className="anime-search-box">
            <input
              type="text"
              placeholder="Search anime titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn" onClick={handleSearch}>
              Search Anime
            </button>
          </div>
        </div>

        {loading ? (
          <p className="loading">Loading anime...</p>
        ) : (
          <div className="anime-premium-grid">
            {animeList.map((anime) => (
              <div className="anime-premium-card fade-up" key={anime.mal_id}>
                <div
                  className="anime-premium-image"
                  onClick={() => openTrailer(anime)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={anime.images?.jpg?.image_url}
                    alt={anime.title}
                  />
                  <div className="anime-overlay"></div>
                  <div className="anime-score-badge">
                    ⭐ {anime.score || "N/A"}
                  </div>
                </div>

                <div className="anime-premium-content">
                  <h3>{anime.title}</h3>
                  <p className="anime-meta">Type: {anime.type || "Unknown"}</p>
                  <p className="anime-meta">
                    Episodes: {anime.episodes || "N/A"}
                  </p>

                  <div className="card-actions">
                    <Link to={`/anime/${anime.mal_id}`} className="btn small">
                      View Details
                    </Link>

                    <button
                      className="btn-outline small"
                      onClick={() => openTrailer(anime)}
                    >
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Anime;
