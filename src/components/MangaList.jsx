import { useFetchMangaList } from "../hooks/useFetchMangaList"

export const MangaList = () => {
  const mangaList = useFetchMangaList('Drama', 10)
  console.log(mangaList)


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  )
}