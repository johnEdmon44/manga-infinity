import { useFetchMangaList } from "../hooks/useFetchMangaList"
import { PropTypes } from "prop-types"
import { useState } from "react"
import { Pagination } from "./Pagination"
import { RenderList } from "./RenderList"


export const MangaList = ({ genreId, order, limit, mangaListType="", sort, isPageTrue }) => {
  const pagination = isPageTrue;
  const [page, setPage] = useState(1);
  const mangaList = useFetchMangaList(genreId, order, limit, sort, page);

  if(!mangaList) {
    return <h1>Loading...</h1>
  }

  const totalPage = mangaList.pagination.last_visible_page;
  

  return (
    <section className="bg-white mx-auto w-11/12 md:w-3/4 mb-20 rounded-lg z-10">
      <h1 className="uppercase font-black  text-center p-7 text-2xl ">{mangaListType==="" ? "results" : `${mangaListType} manga`}</h1>

      <RenderList list={mangaList} />
      {pagination && <Pagination page={page} setPage={setPage} totalPage={totalPage} />}
    </section>
  )
}


MangaList.propTypes = {
  genreId: PropTypes.number,
  order: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  mangaListType: PropTypes.string,
  sort: PropTypes.string,
  isPageTrue: PropTypes.bool,
  page: PropTypes.number,
}