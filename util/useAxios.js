import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [leonData, setLeonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setLeonData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { leonData, loading, error };
};

export default useAxios;
