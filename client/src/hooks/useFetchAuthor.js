import { useEffect, useState } from "react";


export const useFetchAuthor = ( authorId ) => {
  const [author, setAuthor] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/people/${authorId}/full`);
        const data = await response.json();
        setAuthor(data);
      } catch(error) {
        console.log(error)
      }
    }

    fetchData();
  }, [authorId])

  return author;
}