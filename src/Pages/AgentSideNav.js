
import { MdFavoriteBorder } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FiHome, FiUser } from 'react-icons/fi';
import Agentimg from "../IMG/ted.jpeg";
function AgentSideNav() {
    return (
        <div className='SideNav-container'>
            <div className="Creatorlogo">
            <h2>Admins</h2>
                <div className="creatorLogo-info">
                    <img src={Agentimg} alt="img" />
                    <h1>Precious</h1>
                    <p style={{fontWeight: "500"}}>(Agent)</p>
                </div>
            </div>
            <div className='SideNav-sec-one'>
                <ul className='SideNav-sec-one-ul'>
                    <li>
                        <FaHome />
                        <a href="/AgentAdmin">Dashboard</a>
                    </li>
                    <li>
                        <FiHome />
                        <Link to="/AgentProperty">Properties</Link>
                    </li>
                    <li>
                        <FiUser />
                        <Link to="/AgentUsers">Users</Link>
                    </li>
                    <li>
                        <MdFavoriteBorder />
                        <Link to="/Favorite">Appointments</Link>
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
export default AgentSideNav;
