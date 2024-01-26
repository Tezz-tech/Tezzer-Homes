import SideNav from "./SideNav";
import { FaBan } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminUsers = () => {
    return (
        <div>
            <SideNav />
            <div className="Agents-dashboard-container">
                <div className="Agents-dashboard-container-top">
                    <h2>User Management</h2>
                    <Link to = "/CreateAgentUser">
                        <button className="create-new-agent-btn"><IoIosPersonAdd /></button>
                    </Link>
                </div>
                <table className='creator-table'>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>adam pie</td>
                            <td>Adampie@gmail.com</td>
                            <td>123-456-7890</td>
                            <td>
                                <button className="creator-btn creator-delete-btn"><MdDelete /></button>
                                <button className="creator-btn creator-edit-btn"><FaUserEdit /></button>
                                <button className="creator-btn creator-ban-btn"><FaBan /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Janesmith@gmail.com</td>
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
export default AdminUsers;
