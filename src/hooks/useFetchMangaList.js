import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga";

export const useFetchMangaList = (genre, order, limit, sort) => {
  const [mangaList, setMangaList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga(`/api/manga?genre=${genre}&order_by=${order}&limit=${limit}&sort=${sort}`)
        setMangaList(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [genre, order, limit, sort]);

  return mangaList;
}

