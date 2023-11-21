import { MangaList } from "../components/MangaList"
import { Navbar } from "../components/Navbar"


export const Home = () => {
  return (
    <section>
      <Navbar />
      <MangaList genreId={1} order="popularity" limit={5} mangaListType="top" sort="asc" />
      <MangaList order="mal_id" limit={20} mangaListType="newest" sort="desc" />
    </section>
  )
}