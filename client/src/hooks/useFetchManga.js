import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga"

export const useFetchManga = ( mangaId ) => {
  const [manga, setManga] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga(`/api/manga/${mangaId}/full`);
        setManga(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(mangaId) {
      fetchData()
    }

  }, [mangaId]);

  return manga;
}
