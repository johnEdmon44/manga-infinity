import { MangaList } from "../components/MangaList"
import { Navbar } from "../components/Navbar"


export const Home = () => {
  return (
    <section>
      <Navbar />
      <MangaList genre="Action" order="popularity" limit={5}/>
    </section>
  )
}