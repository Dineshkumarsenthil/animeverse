import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import api from "../services/api";
import { useAppContext } from "../context/AppContext";

function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToWatchlist } = useAppContext();

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        const response = await api.get(`/anime/${id}/full`);
        setAnime(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id]);

  const openTrailer = () => {
    if (anime?.trailer?.url) {
      window.open(anime.trailer.url, "_blank");
    } else if (anime?.trailer?.embed_url) {
      window.open(anime.trailer.embed_url, "_blank");
    } else if (anime?.trailer?.youtube_id) {
      window.open(
        `https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.youtube.com/results?search_query=${encodeURIComponent(
          `${anime?.title} trailer`
        )}`,
        "_blank"
      );
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <div className="container details-layout fade-up">
        <div className="details-image">
          <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
        </div>

        <div className="details-content">
          <h1>{anime.title}</h1>

          <p>{anime.synopsis || "No synopsis available."}</p>

          <p>
            <strong>Genres:</strong>{" "}
            {anime.genres?.length
              ? anime.genres.map((genre) => genre.name).join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Episodes:</strong> {anime.episodes || "N/A"}
          </p>

          <p>
            <strong>Score:</strong> {anime.score || "N/A"}
          </p>

          <p>
            <strong>Status:</strong> {anime.status || "N/A"}
          </p>

          <div className="card-actions">
            <button className="btn" onClick={() => addToWatchlist(anime)}>
              Add to Watchlist
            </button>

            <button className="btn-outline" onClick={openTrailer}>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {(anime?.trailer?.embed_url || anime?.trailer?.youtube_id) && (
        <div className="container section fade-up">
          <h2 className="section-title">Official Trailer</h2>
          <div className="trailer-wrapper">
            <iframe
              src={
                anime.trailer?.embed_url ||
                `https://www.youtube.com/embed/${anime.trailer.youtube_id}`
              }
              title={`${anime.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="container nested-nav">
        <NavLink end to={`/anime/${id}`}>
          Overview
        </NavLink>
        <NavLink to={`/anime/${id}/characters`}>Characters</NavLink>
        <NavLink to={`/anime/${id}/reviews`}>Reviews</NavLink>
      </div>

      <div className="container nested-content">
        <Outlet context={{ anime }} />
      </div>
    </section>
  );
}

export default AnimeDetails;
