import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "./Pagination";
import { RenderList } from "./RenderList";
import { fetchBookmarks } from "../features/bookmarkSlice";
import { AuthContext } from "./AuthContext";


export const BookmarkList = () => {
  const { items: mangaList, loading } = useSelector(state => state.bookmark);
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.id) { 
      dispatch(fetchBookmarks());
    }
  }, [dispatch, user]);
  
  if (loading) return <h1 className="mt-96 text-center">Loading bookmarks...</h1>;
  if (mangaList.length === 0) return <h1 className="mt-96 text-center">Empty</h1>;

  const totalPage = Math.ceil(mangaList.length / itemsPerPage);
  const currentPageItems = mangaList.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  

  return (
    <section className="bg-white mx-auto w-3/4 mt-52 rounded-lg">
      <h1 className="uppercase font-black  text-center p-7 text-2xl ">Bookmarks</h1>

      <RenderList list={{ data: currentPageItems }} />
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </section>
  )
}