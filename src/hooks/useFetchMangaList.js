import { useEffect, useState } from "react"
import { fetchMangaList } from "../services/mangaList";

export const useFetchMangaList = (genre, limit) => {
  const [mangaList, setMangaList] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMangaList(`/api/top/manga?page=${page}&genre=${genre}&limit=${limit}`)
        setMangaList(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [genre, limit, page]);

  return mangaList;
}

