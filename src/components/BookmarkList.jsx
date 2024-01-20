import { useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "./Pagination";
import { RenderList } from "./RenderList";


export const BookmarkList = () => {
  const mangaList = useSelector(state => state.bookmark);
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;
  
  if(mangaList.length === 0) {
    return <h1 className="mt-96">Empty</h1>
  }

  const totalPage = Math.ceil(mangaList.length / itemsPerPage);
  const currentPageItems = mangaList.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  

  return (
    <section className="bg-white mx-auto w-3/4 mt-40 rounded-lg">
      <h1 className="uppercase font-black  text-center p-7 text-2xl ">Bookmarks</h1>

      <RenderList list={{ data: currentPageItems }} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </section>
  )
}