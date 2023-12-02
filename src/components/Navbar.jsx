import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { PropTypes } from 'prop-types';


export const Navbar = ({ setSearchList }) => {
  return (
    <nav className="">
      <div className='flex items-center bg-white border border-gray-300'>
        <h1 className="font-black text-4xl tracking-normal text-gray-800 p-5">
          <Link to={'/'}>Mangainfinity</Link>
        </h1>
        <SearchBar setSearchList={setSearchList} />
      </div>

      <ul className="bg-red-500 mb-10 text-white font-bold flex gap-10 p-5">
        <Link to={'/'}>Home</Link>
        <Link to={'/browse/1'}>Browse</Link>
        <Link to={'/bookmark'}>Bookmark</Link>
      </ul>
    </nav>
  )
}


Navbar.propTypes = {
  setSearchList: PropTypes.func,
}