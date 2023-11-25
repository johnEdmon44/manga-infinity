import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { MangaList } from "../components/MangaList"
import { useState } from "react"
import { SelectGenre } from "../components/SelectGenre"
import { Sort } from "../components/Sort"
import { OrderBy } from "../components/orderBy"


export const Browse = () => {
  const { genreId } = useParams()
  const genreIdNumber = Number(genreId);
  const [selectedGenreId, setSelectedGenreId] = useState(genreIdNumber);
  const [selectedSort, setSelectedSort] = useState("asc");
  const [selectedOrder, setSelectedOrder] = useState("popularity");

  return (
    <section>
      <Navbar />
      <div className="bg-white mx-auto w-3/4 mt-10 rounded-lg flex justify-center gap-5">
        <SelectGenre onSelectChange={setSelectedGenreId} />
        <OrderBy onSelectChange={setSelectedOrder} />
        <Sort onSelectChange={setSelectedSort} />
      </div>
      <MangaList key={selectedGenreId} genreId={selectedGenreId} order={selectedOrder} limit={25} sort={selectedSort} isPageTrue={true}  />
    </section>
  )
}