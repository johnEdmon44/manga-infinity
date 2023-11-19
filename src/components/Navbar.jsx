export const Navbar = () => {
  return (
    <nav className="">
      <h1 className="font-black text-4xl tracking-normal text-gray-800 p-5 bg-white">Mangainfinity</h1>

      <ul className="bg-red-500 mb-10 text-white font-bold flex gap-10 p-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Bookmark</li>
      </ul>
    </nav>
  )
}