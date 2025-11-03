import { useEffect, useState } from "react"

export const useFetchGenre = () => {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/genres/manga');
        const data = await response.json();
        setGenres(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []);

  return genres;
}