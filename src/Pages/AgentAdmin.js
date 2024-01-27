import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import AdminLogoImg from "../IMG/Isotype copy.png";
import { Link } from "react-router-dom";
import AgentSideNav from './AgentSideNav';
const AgentAdmin = () => {
  return (
    <div className="Creatoradmin-dashboard">
      <AgentSideNav />
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
            <table className="creator-table">
                <thead>
                    <tr>
                        <th>img</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="" alt="" /></td>
                        <td>The Villa</td>
                        <td>Apo bridge </td>
                        <td>Available</td>
                        <td>$2,000</td>
                    </tr>
                </tbody>
            </table>
          </div>
          <h2>Our Users</h2>
          <table className='creator-table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>John</td>
                <td>John@gmail.com</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AgentAdmin ;
