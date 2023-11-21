import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { MangaList } from "../components/MangaList"

export const Browse = () => {
  const { genreId } = useParams()
  console.log(genreId)


  return (
    <section>
      <Navbar />
      <MangaList genre={genreId} order="popularity" limit={20} sort="asc"  />
    </section>
  )
}