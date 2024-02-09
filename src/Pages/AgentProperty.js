import AgentSideNav from "./AgentSideNav";
import home from "../IMG/home.png";
import { Link } from "react-router-dom";
import { MdAddHome, MdDelete, MdHome } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
const AgentProperty = () => {

        const [verifiedProperties, setVerifiedProperties] = useState([]);

        useEffect(() => {
          const getToken = localStorage.getItem("Agent_Token");
          const AgentId = localStorage.getItem("Agent_Id");
      
          fetch(
            `http://property.reworkstaging.name.ng/v1/properties?agent=${AgentId}&verified=false`,
            {
              headers: { authorization: `Bearer ${getToken}` },
            }
          )
            .then((resp) => resp.json())
            .then((data) => {
              setVerifiedProperties(data.data);
              localStorage.setItem("Total Properties", data.data.length);
              console.log(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }, []);
      
        const handleDelete = (propertyId) => {
          const confirmDelete = window.confirm("Are you sure you want to delete this property?");
          
          if (confirmDelete) {
            const getToken = localStorage.getItem("Admin_Token");
      
            fetch(`http://property.reworkstaging.name.ng/v1/properties/${propertyId}`, {
              method: "DELETE",
              headers: { 
                authorization: `Bearer ${getToken}`,
                "Content-Type": "application/json",
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                console.log("Property deleted successfully");
                setVerifiedProperties((prevProperties) => 
                  prevProperties.filter((property) => property.id !== propertyId)
                );
              })
              .catch((err) => {
                console.error("Error deleting property:", err.message);
              });
          }
        };
      
        return (
          <>
            <AgentSideNav />
            <div className="CreatorProperty-container">
              <div className="CreatorProperty-container-top">
                <h2>Listed Properties</h2>
                <Link to="/AgentCreateProperty">
                  <MdAddHome className="add-home" />
                </Link>
              </div>
              <table className="creator-table">
                <thead>
                  <tr>
                    <th>Property Type</th>
                    <th>Property Name</th>
                    <th>Property Address</th>
                    <th>Property Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {verifiedProperties.map((property) => (
                    <tr key={property.id}>
                  
                      <td>
                        <Link to={`/PropertyDetails/${property.id}`}>
                          <img src={property.image} alt="img" />
                        </Link>
                      </td>
                      <td>{property.name}</td>
                      <td>{property.address}</td>
                      <td>${property.price}</td>
                      <td>
                        <button
                          className="creator-btn creator-delete-btn"
                          onClick={() => handleDelete(property.id)}
                        >
                          <MdDelete />
                        </button>
                        <button className="creator-btn creator-edit-btn">
                          <FaUserEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
}
export default AgentProperty;