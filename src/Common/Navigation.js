import navimage from '../IMG/Vector.png'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import MyModal from '../Componets/Account'
import { useState } from 'react';
function Navigation () {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
    return(
        <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={navimage} alt="Logo" className="logo" />
          </Link>
          <h2>Tezzer-Homes</h2>
        </div>
        <div className="navbar-right">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/about-us">About Us</Link>
          <Link className='nav-link' to="/Projects">Projects</Link>
          <Link className='nav-link' to="/DevelopersPage">Developers</Link>
          <Link className='nav-link' to="/localities">Localities</Link>
          <Link className='nav-link' to="/wishlist">Wishlist</Link>
          <div className="user-icon">
            <button className='register' onClick={handleOpenModal}><FaUser className='nav-link'/></button>
          </div>
        </div>
        <MyModal open={isModalOpen} handleClose={handleCloseModal} />
      </nav>
    )
}
export default Navigation;