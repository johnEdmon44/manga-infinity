import { useState, useEffect } from "react";

export const useFetchBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/bookmarks`, {
          method: "GET",
          credentials: "include", // important for session cookie
        });
        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to fetch bookmarks");
          setBookmarks([]);
        } else {
          setBookmarks(data.bookmarks || []);
        }
      } catch (err) {
        setError("Network error");
        setBookmarks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  return { bookmarks, loading, error };
};
