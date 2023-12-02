import { useEffect, useState } from "react"
import { fetchManga } from "../services/getManga";

export const useFetchSearch = (query) => {
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchManga(`/api/manga?q=${query}`);
        setSearchList(data);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, [query]);

  return searchList;
}