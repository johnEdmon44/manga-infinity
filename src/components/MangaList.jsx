import { useFetchMangaList } from "../hooks/useFetchMangaList"
import { PropTypes } from "prop-types"
import { Link } from 'react-router-dom'

export const MangaList = ({ genreId, order, limit, mangaListType="", sort, page }) => {
  const mangaList = useFetchMangaList(genreId, order, limit, sort, page);

  if(!mangaList) {
    return <h1>Loading...</h1>
  }


  return (
    <section className="bg-white mx-auto w-3/4 mt-10 rounded-lg">
      <h1 className="uppercase font-black  text-center p-7 text-2xl ">{mangaListType==="" ? "results" : `${mangaListType} manga`}</h1>

      <div className="grid grid-cols-5 gap-8 p-5">
        {mangaList.data.map(manga => (
          <div key={manga.mal_id} className=" relative group">
            <img className="h-80 w-80 object-cover border border-gray-300 group-hover:opacity-30 transition-all" src={manga.images.webp.image_url}></img>
            <div className="absolute top-0  mt-5 w-full invisible text-center group-hover:visible">
              {manga.genres.map(genre => (
                <Link to={`/browse/${genre.mal_id}`} id={genre.mal_id} className="bg-black m-2 p-1 bg-opacity-50 text-white inline-flex cursor-pointer transition-all hover:bg-opacity-100 rounded-md" 
                key={genre.mal_id}>{genre.name}
                </Link>
              ))}
            </div>
            <Link to={`/manga/${manga.mal_id}`} id={manga.mal_id} className="bg-black bg-opacity-70 absolute w-full bottom-0 text-center text-white cursor-pointer hover:bg-opacity-100">
              {manga.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}


MangaList.propTypes = {
  genreId: PropTypes.number,
  order: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  mangaListType: PropTypes.string,
  sort: PropTypes.string,
  page: PropTypes.number
}