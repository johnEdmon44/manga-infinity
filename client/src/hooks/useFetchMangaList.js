import { useEffect, useState } from "react"

export const useFetchMangaList = (genreId, order, limit, sort, page = 1) => {
  const [mangaList, setMangaList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga?${genreId ? `genres=${genreId}`: ""}&order_by=${order}&limit=${limit}&sort=${sort}&page=${page}`);
        const data = await response.json();
        console.log(data)
        setMangaList(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [genreId, order, limit, sort, page]);

  return mangaList;
}

