import { useState } from "react";
import { Pagination } from "./Pagination";
import { RenderList } from "./RenderList";
import { useFetchBookmarks } from "../hooks/useFetchBookmarks";

export const BookmarkList = () => {
  const { bookmarks, loading, error } = useFetchBookmarks();
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;

  if (loading) return <h1>Loading bookmarks...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!bookmarks || bookmarks.length === 0) return <h1>No bookmarks found.</h1>;

  const totalPage = Math.ceil(bookmarks.length / itemsPerPage);
  const currentPageItems = bookmarks.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // RenderList expects { data: [...] }
  return (
    <section className="bg-white mx-auto w-3/4 mt-10 rounded-lg">
      <h1 className="uppercase font-black text-center p-7 text-2xl">Bookmarks</h1>

      <RenderList list={{ data: currentPageItems }} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </section>
  );
};
