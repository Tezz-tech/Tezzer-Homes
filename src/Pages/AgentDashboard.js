import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import { FaBan } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        let getToken = localStorage.getItem("Admin_Token");
      try {
        const response = await fetch('http://property.reworkstaging.name.ng/v1/merchants/agents', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken}` 
          }
        });

        if (response.ok) {
          const data = await response.json();
          setAgents(data.data);
          console.log(data.data.length);
          localStorage.setItem("Total Agents", data.data.length);
        } else {
          console.error("Failed to fetch data from the API. Status:", response.status);
          const responseBody = await response.text();
          console.error("Response body:", responseBody);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SideNav />
      <div className="Agents-dashboard-container">
        <div className="Agents-dashboard-container-top">
          <h2>Agents Management</h2>
          <Link to="/create-agent">
            <button className="create-new-agent-btn">
              <IoIosPersonAdd />
            </button>
          </Link>
        </div>
        <table className="creator-table">
          <thead>
            <tr>
              <th>Agent Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.full_name}</td>
                <td>{agent.company}</td>
                <td>{agent.email}</td>
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
  );
};

export default Agents;
