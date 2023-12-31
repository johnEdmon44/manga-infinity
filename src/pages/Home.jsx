import { MangaList } from "../components/MangaList"
import { Navbar } from "../components/Navbar"


export const Home = () => {
  return (
    <section className="mt-52">
      <Navbar />
      <MangaList genreId={1} order="popularity" limit={5} mangaListType="top" sort="asc" isPageTrue={false} />
      <MangaList order="mal_id" limit={20} mangaListType="newest" sort="desc" isPageTrue={false} />
    </section>
  )
}