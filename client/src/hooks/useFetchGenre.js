import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga";

export const useFetchGenre = () => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga('/api/genres/manga');
        setGenres(data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []);

  return genres;
}