import { useFetchMangaList } from "../hooks/useFetchMangaList"
import { PropTypes } from "prop-types"

export const MangaList = ({ genre, order, limit }) => {
  const mangaList = useFetchMangaList(genre, order, limit);

  if(!mangaList) {
    return <h1>Loading...</h1>
  }

  console.log(mangaList.data)

  return (
    <section className="bg-white mx-auto w-3/4 mt-10 rounded-lg">
      <h1 className="uppercase font-black  text-center p-7 text-2xl ">top {genre} manga</h1>

      <div className="flex justify-center gap-8 p-5">
        {mangaList.data.map(manga => (
          <div key={manga.mal_id} className="relative cursor-pointer">
            <img className="h-80 object-cover border border-gray-300" src={manga.images.webp.image_url}></img>
            <h1 className="bg-black bg-opacity-70 absolute w-full bottom-0 text-center text-white">{manga.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}


MangaList.propTypes = {
  genre: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
}