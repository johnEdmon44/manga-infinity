import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { MangaList } from "../components/MangaList"
import { SelectComponent } from "../components/SelectComponent"
import { useState } from "react"

export const Browse = () => {
  const { genreId } = useParams()
  const genreIdNumber = Number(genreId);
  const [selectedGenreId, setSelectedGenreId] = useState(genreIdNumber);

  const handleSelect = (selectedOption) => {
    setSelectedGenreId(Number(selectedOption))
  }


  return (
    <section>
      <Navbar />
      <SelectComponent onSelectChange={handleSelect} />
      <MangaList key={selectedGenreId} genreId={selectedGenreId} order="popularity" limit={20} sort="asc"  />
    </section>
  )
}