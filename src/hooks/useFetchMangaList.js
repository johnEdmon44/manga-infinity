import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga";

export const useFetchMangaList = (genre, order, limit) => {
  const [mangaList, setMangaList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga(`/api/manga?genre=${genre}&order_by=${order}&limit=${limit}`)
        setMangaList(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [genre, order, limit]);

  return mangaList;
}

