import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ setSearchList }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();


  const logout = async () => {
    await handleLogout(); // only clears user context
    navigate("/login");   // navigate after logout
  };

  return (
    <nav className=''>
      <div className={`w-full fixed md:absolute z-20 top-0 md:left-0 ${openMenu ? "left-0" : "-left-full"} `}>
        <div className='flex bg-white border border-gray-300'>
          <h1 className="font-black text-4xl tracking-normal text-gray-800 p-5">
            <Link to={'/'}>Mangainfinity</Link>
          </h1>
        </div>

        <div className="bg-red-500 mb-10 text-white font-bold flex flex-col md:flex-row md:gap-10 h-screen md:h-auto justify-between">
          <div className='p-6 md:p-4 md:border-none '>
            <NavLink to="/" className={({isActive}) => `border-b border-black p-6 md:p-4 md:border-none 
              ${isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-200"}`}>
              Home
            </NavLink>
            <NavLink to="/browse/1" className={({isActive}) => `border-b border-black p-6 md:p-4 md:border-none 
              ${isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-200"}`}>
                Browse
            </NavLink>
            <NavLink
              to={user ? "/bookmark" : "/login"}
              className={({ isActive }) =>
                `border-b border-black p-6 md:p-4 md:border-none ${
                  isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-200"
                }`
              }
            >
              Bookmark
            </NavLink>
          </div>

          <div className='flex flex-col md:flex-row md:gap-10 h-screen md:h-auto md:border-none mr-5'>
            {user ? (
              <>
                <span className='p-6 md:p-4'>{user.username}</span>
                <button
                  onClick={logout}
                  className='border-b border-black p-6 md:p-4 md:border-none hover:text-yellow-200'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/signup" className={({isActive}) => `border-b border-black p-6 md:p-4 md:border-none 
                  ${isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-200"}`}>
                  Signup
                </NavLink>
                <NavLink to="/login" className={({isActive}) => `border-b border-black p-6 md:p-4 md:border-none 
                  ${isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-200"}`}>
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={`border-none md:border-b border-black w-full fixed md:absolute top-0 z-30 ${openMenu ? "": "bg-white md:bg-transparent"}`}>
        <FontAwesomeIcon 
          className={`cursor-pointer absolute top-0 m-5 block md:hidden ${openMenu ? "right-0": "left-0"}`}
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