import navimage from '../IMG/Vector.png'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
function Navigation () {
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
          <Link className='nav-link' to="/projects">Projects</Link>
          <Link className='nav-link' to="/developers">Developers</Link>
          <Link className='nav-link' to="/localities">Localities</Link>
          <Link className='nav-link' to="/wishlist">Wishlist</Link>
          <div className="user-icon">
            <FaUser className='nav-link'/>
          </div>
        </div>
      </nav>
    )
}
export default Navigation;