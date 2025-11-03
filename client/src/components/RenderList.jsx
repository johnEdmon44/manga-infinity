import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"


export const RenderList = ({ list }) => {

  if (!list.data || list.data.length === 0) {
    return <>Loading...</>;
   }


  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 p-5">
      {list && list.data.map(manga => (
        <div key={manga.mal_id} className=" relative group">
          <img 
            className="h-80 w-80 object-cover border border-gray-300 group-hover:opacity-30 transition-all" 
            src={manga.images.webp.image_url}
            alt={manga.title}
          />
          <div className="absolute top-0  mt-5 w-full invisible text-center group-hover:visible">
            {manga.genres.map(genre => (
              <Link 
                to={`/browse/${genre.mal_id}`} 
                id={genre.mal_id} 
                className="bg-black m-2 p-1 bg-opacity-50 text-white inline-flex cursor-pointer transition-all hover:bg-opacity-100 rounded-md" 
                key={genre.mal_id}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <Link 
            to={`/manga/${manga.mal_id}`} 
            id={manga.mal_id} 
            className="bg-black bg-opacity-70 absolute w-full bottom-0 text-center text-white cursor-pointer hover:bg-opacity-100"
          >
            {manga.title}
          </Link>
        </div>
      ))}
    </div>
  )
}


RenderList.propTypes = {
  list: PropTypes.object
}