import { useEffect, useState } from "react"

export const useFetchManga = ( mangaId ) => {
  const [manga, setManga] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaId}/full`);
        const data = await response.json()
        setManga(data)
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
