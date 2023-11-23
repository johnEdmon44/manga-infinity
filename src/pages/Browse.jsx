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

  const handleSelectedGenre = (selectedOption) => {
    setSelectedGenreId(Number(selectedOption))
  }

  const handleSort = (selectedOption) => {
    setSelectedSort(selectedOption)
  }

  const handleOrderBy = (selectedOption) => {
    setSelectedOrder(selectedOption)
  }

  return (
    <section>
      <Navbar />
      <div className="bg-white mx-auto w-3/4 mt-10 rounded-lg flex justify-center gap-5">
        <SelectGenre onSelectChange={handleSelectedGenre} />
        <OrderBy onSelectChange={handleOrderBy} />
        <Sort onSelectChange={handleSort} />
      </div>
      <MangaList key={selectedGenreId} genreId={selectedGenreId} order={selectedOrder} limit={20} sort={selectedSort}  />
    </section>
  )
}