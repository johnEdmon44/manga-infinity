import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="">
      <h1 className="font-black text-4xl tracking-normal text-gray-800 p-5 bg-white">
        <Link to={'/'}>Mangainfinity</Link>
      </h1>

      <ul className="bg-red-500 mb-10 text-white font-bold flex gap-10 p-5">
        <Link to={'/'}>Home</Link>
        <Link to={'/browse/1'}>Browse</Link>
        <Link to={'/'}>Bookmark</Link>
      </ul>
    </nav>
  )
}