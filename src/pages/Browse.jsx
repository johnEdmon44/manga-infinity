import { useParams } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { MangaList } from "../components/MangaList"
import { useEffect, useState } from "react"
import { SelectGenre } from "../components/SelectGenre"
import { Sort } from "../components/Sort"
import { OrderBy } from "../components/orderBy"
import { SearchList } from "../components/SearchList"


export const Browse = () => {
  const { query } = useParams()
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedSort, setSelectedSort] = useState("asc");
  const [selectedOrder, setSelectedOrder] = useState("popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);

  useEffect(() => {
    if(searchList) {
      setSelectedGenreId(Number(query));
    } else {
      setSearchQuery(query);
    }
  }, [searchList, query]);


  return (
    <section>
      <Navbar setSearchList={setSearchList} />

      {!searchList ? (
        <>
          <div className="bg-white mx-auto w-3/4 mt-10 rounded-lg flex justify-center gap-5">
            <SelectGenre onSelectChange={setSelectedGenreId} />
            <OrderBy onSelectChange={setSelectedOrder} />
            <Sort onSelectChange={setSelectedSort} />
          </div>
          <MangaList key={selectedGenreId} genreId={selectedGenreId} order={selectedOrder} limit={25} sort={selectedSort} isPageTrue={true} />
        </>
        
      ): (
        <SearchList key={searchQuery} query={query}/>
      )}
    </section>
  )
}