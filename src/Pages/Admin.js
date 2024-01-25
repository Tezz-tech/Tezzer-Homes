import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import AdminLogoImg from "../IMG/Isotype copy.png";
import propertyimg from "../IMG/home.png"
import SideNav from './SideNav';
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div className="Creatoradmin-dashboard">
      <SideNav />
      <div className='Main-container'>
        <div className="Main-container-top">
          <div className="Main-container-top-left">
            <img src={AdminLogoImg} alt="img" />
          </div>
          <div class="Main-container-search-container">
            <button type="submit"><FaSearch /> </button>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="Main-container-top-right">
            <p>Switch Account</p>
            <VscAccount className='creator-account-icon' />
          </div>
        </div>
        <div className="MainDashboard-container">
          <div className="ourpropertylisting">
            <h2>Properties Listing</h2>
            <div className="propertylisting-container">
              <div className="property-box">
                <div className="property-box-img">
                  <img src= {propertyimg} alt="img" />
                </div>
                <div className="property-box-info">
                <h4>Property Name</h4>
                  <Link to = "Propertypage" className='property-box-info-link'>View details</Link>
                </div>
              </div>
              <div className="property-box">
                <div className="property-box-img">
                  <img src= {propertyimg} alt="img" />
                </div>
                <div className="property-box-info">
                <h4>Property Name</h4>
                  <Link to = "Propertypage" className='property-box-info-link'>View details</Link>
                </div>
              </div>
              <div className="property-box">
                <div className="property-box-img">
                  <img src= {propertyimg} alt="img" />
                </div>
                <div className="property-box-info">
                  <h4>Property Name</h4>
                  <Link to = "Propertypage" className='property-box-info-link'>View details</Link>
                </div>
              </div>
            </div>
          </div>
          <h2>Our Agents</h2>
          <table className='creator-table'>
            <thead>
              <tr>
                <th>Agent</th>
                <th>Name</th>
                <th>Company</th>
                <th>ID</th>
                <th>Properties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              {/* <img src={Boing} alt="img" /> */}
                <td>John</td>
                <td>ABC Realty</td>
                <td>A123</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Jane</td>
                <td>XYZ Properties</td>
                <td>X456</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Jane</td>
                <td>XYZ Properties</td>
                <td>X456</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Jane</td>
                <td>XYZ Properties</td>
                <td>X456</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
