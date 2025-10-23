import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga";

export const useFetchMangaList = (genreId, order, limit, sort, page = 1) => {
  const [mangaList, setMangaList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga(`/api/manga?${genreId ? `genres=${genreId}`: ""}&order_by=${order}&limit=${limit}&sort=${sort}&page=${page}`)
        setMangaList(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [genreId, order, limit, sort, page]);

  return mangaList;
}

