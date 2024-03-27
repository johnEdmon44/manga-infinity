import { useEffect, useState } from "react"

export const useFetchSearch = (query) => {
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}`);
        const data = await response.json();
        setSearchList(data)
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, [query]);

  return searchList;
}