import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const Navbar = ({ setSearchList }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=''>
      <div className={`w-full fixed z-20 top-0 md:left-0 ${openMenu ? "left-0" : "-left-full"} `}>
        <div className='flex bg-white border border-gray-300'>
          <h1 className="font-black text-4xl tracking-normal text-gray-800 p-5">
            <Link to={'/'}>Mangainfinity</Link>
          </h1>
        </div>

        <ul className="bg-red-500 mb-10 text-white font-bold flex flex-col md:flex-row md:gap-10 h-screen md:h-auto">
          <Link className='border-b border-black p-6 md:p-4 md:border-none' to={'/'}>Home</Link>
          <Link className='border-b border-black p-6 md:p-4 md:border-none' to={'/browse/1'}>Browse</Link>
          <Link className='border-b border-black p-6 md:p-4 md:border-none' to={'/bookmark'}>Bookmark</Link>
          <Link className='border-b border-black p-6 md:p-4 md:border-none' to={'/author'}>author</Link>
        </ul>
      </div>

      <div className={`border-none md:border-b border-black w-full fixed top-0 h-20 z-30 ${openMenu ? "": "bg-white md:bg-transparent"}`}>
        <FontAwesomeIcon 
          className={`h-10 cursor-pointer absolute top-0 m-5 block md:hidden ${openMenu ? "right-0": "left-0"}`}
          icon={faBars} 
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div className={`${openMenu ? "hidden": "block" }`}>
          <SearchBar setSearchList={setSearchList} />
        </div>
      </div>

    </nav>
  )
}


Navbar.propTypes = {
  setSearchList: PropTypes.func,
}