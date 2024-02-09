import AgentSideNav from "./AgentSideNav";
import { FaBan } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AgentUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let getToken = localStorage.getItem("Agent_Token");
                const response = await axios.get('http://property.reworkstaging.name.ng/v1/users', {
                    params: {
                        limit: 50,
                        page: 2,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${getToken}`,
                    },
                });

                if (response.status === 200) {
                    const data = response.data;
                    setUsers(data.data || []);
                    console.log(data);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); 

    return (
        <div>
            <AgentSideNav />
            <div className="Agents-dashboard-container">
                <div className="Agents-dashboard-container-top">
                    <h2>User Management</h2>
                    <Link to="/create-Agent-users">
                        <button className="create-new-agent-btn">
                            <IoIosPersonAdd />
                        </button>
                    </Link>
                </div>
                <table className="creator-table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button className="creator-btn creator-delete-btn">
                                        <MdDelete />
                                    </button>
                                    <button className="creator-btn creator-edit-btn">
                                        <FaUserEdit />
                                    </button>
                                    <button className="creator-btn creator-ban-btn">
                                        <FaBan />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AgentUsers;