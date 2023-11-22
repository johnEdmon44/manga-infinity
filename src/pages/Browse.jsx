import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { MangaList } from "../components/MangaList"

export const Browse = () => {
  const { genreId } = useParams()
  const genreIdNumber = Number(genreId)


  return (
    <section>
      <Navbar />
      <MangaList key={genreIdNumber} genreId={genreIdNumber} order="popularity" limit={20} sort="asc"  />
    </section>
  )
}