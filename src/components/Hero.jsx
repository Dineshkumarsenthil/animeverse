import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">🔥 Welcome to AniVerse</span>
          <h1>
            Explore the Ultimate <span>Anime Universe</span>
          </h1>
          <p>
            Discover top anime, explore characters, manage your watchlist, and
            enjoy a premium anime-inspired experience with a modern interface.
          </p>

          <div className="hero-buttons">
            <Link to="/anime" className="btn">
              Explore Anime
            </Link>
            <Link to="/watchlist" className="btn-outline">
              My Watchlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
