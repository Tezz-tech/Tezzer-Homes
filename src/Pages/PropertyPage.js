import React from 'react';
import { FaHome } from "react-icons/fa";
import home from "../IMG/home.png";
import { IoBed } from "react-icons/io5";
import SideNav from './SideNav';
import { FaBath } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Propertypage = () => {
    return (
        <div className="Creatoradmin-dashboard">
            <SideNav />
            <div className="Properties-container">
                <h3>Property Listing</h3>
                <div className="Admin-property-container">
                    <div className="Admin-property-box">
                        <img src={home} alt="img" />
                        <div className="Admin-property-box-info">
                            <div className="Admin-property-box-info-content">
                                <FaHome />
                                <p>20 sq metres</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <IoBed />
                                <p>3 Bedrooms</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <FaBath />
                                <p>3 Bathrooms</p>
                            </div>
                        </div>
                        <div className="Admin-property-box-info-content">
                            <h4>Sweet Home for small family</h4>
                            <p><CiLocationOn /> Gwagwalada , Abuja</p>
                            <p>Property Status</p>
                            <h4>&#8358; 2,000,000</h4>
                        </div>
                    </div>
                    <div className="Admin-property-box">
                        <img src={home} alt="img" />
                        <div className="Admin-property-box-info">
                            <div className="Admin-property-box-info-content">
                                <FaHome />
                                <p>20 sq metres</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <IoBed />
                                <p>3 Bedrooms</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <FaBath />
                                <p>3 Bathrooms</p>
                            </div>
                        </div>
                        <div className="Admin-property-box-info-content">
                            <h4>Sweet Home for small family</h4>
                            <p><CiLocationOn /> Gwagwalada , Abuja</p>
                            <p>Property Status</p>
                            <h4>&#8358; 2,000,000</h4>
                        </div>
                    </div>
                    <div className="Admin-property-box">
                        <img src={home} alt="img" />
                        <div className="Admin-property-box-info">
                            <div className="Admin-property-box-info-content">
                                <FaHome />
                                <p>20 sq metres</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <IoBed />
                                <p>3 Bedrooms</p>
                            </div>
                            <div className="Admin-property-box-info-content">
                                <FaBath />
                                <p>3 Bathrooms</p>
                            </div>
                        </div>
                        <div className="Admin-property-box-info-content">
                            <h4>Sweet Home for small family</h4>
                            <p><CiLocationOn /> Gwagwalada , Abuja</p>
                            <p>Property Status</p>
                            <h4>&#8358; 2,000,000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Propertypage;