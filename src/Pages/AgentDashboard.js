import SideNav from "./SideNav";
import { FaBan } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
const Agents = () => {
    return (
        <div>
            <SideNav />
            <div className="Agents-dashboard-container">
                <div className="Agents-dashboard-container-top">
                    <h2>Agents Management</h2>
                    <Link to="/create-agent">
                        <button className="create-new-agent-btn"><IoIosPersonAdd /></button>
                    </Link>
                </div>
                <table className='creator-table'>
                    <thead>
                        <tr>
                            <th>Agent Name</th>
                            <th>Company</th>
                            <th>Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ted ed</td>
                            <td>ABC Realty</td>
                            <td>123-456-7890</td>
                            <td>
                                <button className="creator-btn creator-delete-btn"><MdDelete /></button>
                                <button className="creator-btn creator-edit-btn"><FaUserEdit /></button>
                                <button className="creator-btn creator-ban-btn"><FaBan /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>XYZ Brokers</td>
                            <td>098-765-4321</td>
                            <td>
                                <button className="creator-btn creator-delete-btn"><MdDelete /></button>
                                <button className="creator-btn creator-edit-btn"><FaUserEdit /></button>
                                <button className="creator-btn creator-ban-btn"><FaBan /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Agents;