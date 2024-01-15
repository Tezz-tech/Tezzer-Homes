import React from 'react';
import { FiHome, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';
import AdminLogoImg from "../IMG/Isotype copy.png";
const  = () => {

  return (
    <div className="Creatoradmin-dashboard">
      <header>
        <div className="Creatorlogo">
          <img src= {AdminLogoImg} alt="Real Estate Logo" />
        </div>

        <div className="Creatorprofile">
          <img src="/admin-profile.jpg" alt="Admin Profile" />
          <div className="Creatorprofile-menu">
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="Creatornav">
        <ul>
          <li>
            <FiHome />
            <a href="/">Dashboard</a>
          </li>
          <li>
            <FiHome />
            <a href="/properties">Properties</a>
          </li>
          <li>
            <FiUsers />
            <a href="/agents">Agents</a>
          </li>
          <li>
            <FiUsers />
            <a href="/users">Users</a>
          </li>
          <li>
            <FiBarChart2 />
            <a href="/analytics">Analytics</a>
          </li>
          <li>
            <FiSettings />
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </div>

      {/* Dashboard */}
      <div className='creatormain'>
        <h1>Dashboard</h1>
        
        {/* metrics */}

        {/* charts */}

      </div>

      {/* Properties */}
      <section className="Creatorproperties">
        {/* property table */}
        
        {/* add property form */}
      </section>

      {/* Users */}
      <section className="Creatorusers">
        {/* user table */}

        {/* add user form */}
      </section>

    </div>
  );
}

export default AdminDashboard;
