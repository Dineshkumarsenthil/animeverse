import { Link } from "react-router-dom";

function Home() {
  const trendingAnime = [
    {
      title: "Attack on Titan",
      genre: "Action / Dark Fantasy",
      rating: "9.1",
      image: "/Attack on tittan.jpg",
      trailer: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
    },
    {
      title: "Demon Slayer",
      genre: "Action / Adventure",
      rating: "8.8",
      image: "/Kimetsu No Yaiba✨️ Demon Slayer ✨️.jpg",
      trailer: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
    },
    {
      title: "Jujutsu Kaisen",
      genre: "Supernatural / Shonen",
      rating: "8.7",
      image: "/Shibuya arc.jpg",
      trailer: "https://www.youtube.com/watch?v=4A_X-Dvl0ws",
    },
  ];

const genres = [
    "Action",
    "Adventure",
    "Fantasy",
    "Romance",
    "Drama",
    "Comedy",
    "Sci-Fi",
    "Shonen",
  ];

const features = [
    {
      title: "Explore Trending Masterpieces",
      text: "Discover top-rated anime, fan-favorite series, and rising titles through a clean and immersive premium interface.",
    },
    {
      title: "Create Your Personal Watchlist",
      text: "Save the anime you love, organize your favorites, and build a watchlist experience that feels smooth and effortless.",
    },
    {
      title: "Dive Into Detailed Anime Insights",
      text: "Access genres, ratings, summaries, trailers, and more with beautifully structured layouts designed for anime enthusiasts.",
    },
  ];

const openTrailer = (url) => {
    window.open(url, "_blank");
  };

return (
    <>
      <section className="hero premium-hero">
        <div className="hero-overlay"></div>

<div className="container hero-inner premium-hero-inner">
          <div className="hero-content fade-up">
            <h1>
              Enter the
              <br />
              Ultimate <span>Anime Universe</span>
            </h1>

<p>
              Discover iconic series, rising favorites, unforgettable characters,
              and a premium watchlist experience created for true anime fans.
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

<section className="section premium-stats-section fade-up">
        <div className="container">
          <div className="premium-stats-grid">
            <div className="premium-stat-card fade-up">
              <h3>500+</h3>
              <p>Anime Titles</p>
            </div>
            <div className="premium-stat-card fade-up">
              <h3>50+</h3>
              <p>Genres Covered</p>
            </div>
            <div className="premium-stat-card fade-up">
              <h3>100%</h3>
              <p>Responsive Experience</p>
            </div>
            <div className="premium-stat-card fade-up">
              <h3>Premium</h3>
              <p>Interface Design</p>
            </div>
          </div>
        </div>
      </section>

<section className="section featured-section fade-up">
        <div className="container">
          <h2 className="section-title">Why Choose Animeverse?</h2>
          <div className="featured-grid">
            {features.map((item) => (
              <div className="featured-card fade-up" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="section trending-section fade-up">
        <div className="container">
          <h2 className="section-title">Trending Anime Right Now</h2>

<div className="trending-grid">
            {trendingAnime.map((anime) => (
              <div className="trending-card fade-up" key={anime.title}>
                <div
                  className="trending-image"
                  onClick={() => openTrailer(anime.trailer)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={anime.image} alt={anime.title} />
                  <span className="rating-badge">⭐ {anime.rating}</span>
                </div>

<div className="trending-content">
                  <h3>{anime.title}</h3>
                  <p>{anime.genre}</p>
                  <button
                    className="btn small"
                    onClick={() => openTrailer(anime.trailer)}
                  >
                    Watch Trailer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="section genre-section fade-up">
        <div className="container">
          <h2 className="section-title">Explore Popular Genres</h2>
          <div className="genre-tags">
            {genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </section>

<section className="section cta-section fade-up">
        <div className="container">
          <div className="cta-card fade-up">
            <span className="cta-badge">Start Your Journey</span>
            <h2>Enjoy Amazing Anime</h2>
            <p>
              Browse trending anime, explore detailed series information,
              and create your personal watchlist with Animeverse.
            </p>
            <div className="cta-actions">
              <Link to="/anime" className="btn">
                Start Exploring
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
