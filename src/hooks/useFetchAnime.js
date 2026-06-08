import { useEffect, useState } from "react";
import api from "../services/api";

function useFetchAnime(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get(endpoint);
        if (isMounted) {
          setData(response.data.data || []);
          setError("");
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch data");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetchAnime;
