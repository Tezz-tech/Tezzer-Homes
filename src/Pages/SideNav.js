
import { MdAddHome, MdFavoriteBorder, MdOutlineSupportAgent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { FiHome, FiUser, FiUsers } from 'react-icons/fi';
import Agentimg from "../IMG/ted.jpeg";
function SideNav() {
    return (
        <div className='SideNav-container'>
            <div className="Creatorlogo">
            <h2>Admins</h2>
                <div className="creatorLogo-info">
                    <img src={Agentimg} alt="img" />
                    <h1>Edwins</h1>
                    <p style={{fontWeight: "500"}}>(Merchant)</p>
                </div>
            </div>
            <div className='SideNav-sec-one'>
                <ul className='SideNav-sec-one-ul'>
                    <li>
                        <FaHome />
                        <a href="/AdminDashboard">Dashboard</a>
                    </li>
                    <li>
                        <FiHome />
                        <Link to="/Propertypage">Properties</Link>
                    </li>
                    <li>
                        <FiUsers />
                        <Link to="/Agents">Agents</Link>
                    </li>
                    <li>
                        <FiUser />
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <MdFavoriteBorder />
                        <Link to="/Favorite">Appointments</Link>
                    </li>
                    <li>
                        <FaUser />
                        <Link to="/createUser">Create User</Link>
                    </li>
                    <li>
                        <MdAddHome />
                        <Link to ="/CreateProperty">Create Property</Link>
                    </li>
                    <li>
                        <MdOutlineSupportAgent />
                        <Link to="/CreateAgent">Create Agent</Link>
                    </li>
                    <li>
                        <CiLogout />
                        <Link to="">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideNav;