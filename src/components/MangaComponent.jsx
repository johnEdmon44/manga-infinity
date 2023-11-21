import { useParams } from "react-router-dom"
import { useFetchManga } from "../hooks/useFetchManga";

export const MangaComponent = () => {
  const { mangaId } = useParams();
  const getManga = useFetchManga( mangaId );
  
  if(!getManga) {
    return <>Loading ..</>
  }

  const manga = getManga.data;

  return (
    <section className="bg-white mx-auto w-2/4 mt-10 ">
      <div className="flex p-5">
        <img className="" src={manga.images.webp.image_url} alt={manga.title}></img>
        <div>
          <h1 className="ml-3 mt-1 font-bold text-2xl">{manga.title}</h1>
          <div>
            {manga.genres.map(genre => (
              <p className="bg-black ml-3 mt-1 p-1 bg-opacity-50 text-white inline-flex cursor-pointer transition-all hover:bg-opacity-100 rounded-2xl text-xs" id={genre.mal_id} key={genre.mal_id}>
                {genre.name} 
              </p>
            ))}
          </div>
          <div className="flex">
            {manga.authors.map((author, index) => (
              <p className="ml-3 mt-1 text-sm font-bold" id={author.mal_id} key={author.mal_id}>{author.name}{index < manga.authors.length - 1 && <span>, </span>}</p>
            ))}
          </div>

          <p className="ml-3 mt-3 text-sm">{manga.synopsis}</p>
        </div>
      </div>
    </section>
  )
}