import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Characters() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await api.get(`/anime/${id}/characters`);
        setCharacters(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCharacters();
  }, [id]);

  return (
    <div>
      <h2>Characters</h2>
      <div className="anime-grid">
        {characters.slice(0, 8).map((item, index) => (
          <div className="anime-card" key={index}>
            <img
              src={item.character.images?.jpg?.image_url}
              alt={item.character.name}
            />
            <div className="anime-card-content">
              <h3>{item.character.name}</h3>
              <p>Role: {item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
