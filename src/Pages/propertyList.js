import React, { Component } from'react';
import SideNav from "./SideNav";
import { Link } from 'react-router-dom';
import { MdAddHome} from "react-icons/md";
const CreatorProperty = () => {
    return (
        <div>
            <SideNav />
            <div className="CreatorProperty-container">
                <div className="CreatorProperty-container-top">
                    <h2>Property Management</h2>
                    <Link to="/CreateProperty">
                        <button className="create-new-property-btn"><MdAddHome /></button>
                    </Link>
                </div>
                <table className='creator-table'>
                    <thead>
                        <tr>
                            <th>Property Logo</th>
                            <th>Title</th>
                            <th>Address</th>
                            <th>price</th>
                            <th>Rooms</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="property-logo" />
                            </td>
                            <td>
                                <p>The Villa</p>
                            </td>
                            <td>
                                <p>1234 Main St</p>
                            </td>
                            <td>
                                <p>$100,000</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>Available</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }

  export default CreatorProperty;
