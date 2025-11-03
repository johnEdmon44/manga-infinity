import { useParams } from "react-router-dom";
import { useFetchAuthor } from "../hooks/useFetchAuthor";
import { Link } from "react-router-dom";


export const AuthorComponent = () => {
  const { authorId } = useParams();
  const getAuthor = useFetchAuthor(authorId);

  if(!getAuthor) {
    return <>Loading...</>
  }

  const author = getAuthor.data;

  const dateString = author.birthday;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const formattedDate = formatDate(dateString);


  return (
    <section className="bg-white mt-52 mx-auto w-9/12 lg:w-3/4 ">
      <div className="p-5">
        <div className="flex-row md:flex gap-5">
          <img src={author.images.jpg.image_url}></img>

          <div>
            <h1 className="font-bold text-2xl">{author.name}</h1>
            <p>Birthday: {formattedDate}</p>

            <div className="mt-4">
              <h3 className="font-bold text-1xl">Manga</h3>

              <ul>
                {author.manga.map(title => (
                  <li key={title.manga.mal_id}>
                    <Link 
                    className="text-xs text-blue-700 underline underline-offset-1"
                    to={`/manga/${title.manga.mal_id}`}
                    key={title.manga.mal_id}
                    id={title.manga.mal_id}>
                      {title.manga.title}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
          </div>
        </div>

        <p className="text-xs mt-5">
          {author.about}  
        </p>
      </div>
    </section>
  )
}