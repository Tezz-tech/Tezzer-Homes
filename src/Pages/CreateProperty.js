import React, { useState } from "react";
import SideNav from "./SideNav";

const CreateProperty = () => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("");
  const [address, setAddress] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertycategory, setPropertyCategory] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [parking, setParking] = useState("");
  const [toilets, setToilets] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyuse, setPropertyuse] = useState("");
  const [propertyImage, setPropertyImage] = useState("");
  const [agentName, setAgentName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!propertyName) {
      errors.propertyName = "Property Name is required";
    }
    if (!propertyPrice) {
      errors.propertyPrice = "Property Price is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    if (!state) {
      errors.state = "State is required";
    }
    if (!city) {
      errors.city = "City is required";
    }
    if(!lat) {
        errors.lat = "Latitude is required";
    }
    if(!lng) {
        errors.lng = "Longitude is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!propertyDescription) {
      errors.propertyDescription = "Property Description is required";
    }
    if (!propertycategory) {
      errors.propertycategory = "Property Category is required";
    }
    if (!totalArea) {
      errors.totalArea = "Total Area is required";
    }
    if(!propertyuse) {
        errors.propertyuse = "Property use is required";
    }
    if (!bedrooms) {
      errors.bedrooms = "Bedrooms is required";
    }
    if (!bathrooms) {
      errors.bathrooms = "Bathrooms is required";
    }
    if (!parking) {
      errors.parking = "Parking is required";
    }
    if (!toilets) {
      errors.toilets = "Toilets is required";
    }
    if (!paymentPlan) {
      errors.paymentPlan = "Please choose a payment plan";
    }
    if (!propertyType) {
      errors.propertyType = "Property Type is required";
    }

    if (!propertyImage) {
      errors.propertyImage = "Property Image is required";
    }
    if (!agentName) {
      errors.agentName = "Agent Name is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const userDetails = {
      name: propertyName,
      price: propertyPrice,
      country: country,
      state: state,
      city: city,
      lat: lat,
      lng:lng,
      address: address,
      description: propertyDescription,
      category: propertycategory,
      total_area: totalArea,
      bedroom: bedrooms,
      bathroom: bathrooms,
      toilet: toilets,
      parking_space: parking,
      property_use: propertyuse, 
      payment_plan: paymentPlan,
      type: propertyType,
      image: propertyImage,
      agentName: agentName,
    };

    let getToken = localStorage.getItem("Admin_Token");

    fetch("http://property.reworkstaging.name.ng/v1/properties", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Property created");
        // Add your navigation logic here
        // Example: history.push("/dashboard");
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <SideNav />
      <div className="CreateProperty">
        <h1>Create Property</h1>
        <div className="CreateProperty-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Property Name</label>
              <input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
              {errors.propertyName && (
                <p style={{ color: "red" }}>{errors.propertyName}</p>
              )}
            </div>

            <div>
              <label>Property Price</label>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
              />
              {errors.propertyPrice && (
                <p style={{ color: "red" }}>{errors.propertyPrice}</p>
              )}
            </div>

            <div>
              <label>Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              {errors.country && (
                <p style={{ color: "red" }}>{errors.country}</p>
              )}
            </div>

            <div>
              <label>State :</label>
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}
            </div>

            <div>
              <label>City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
            </div>
            
            <div>
                <label>Latitude:</label>
                <input type="number" value={lat} onChange={(e) => setLat(e.target.value)}/>
                {errors.lat && <p style={{color: "red"}}>{errors.lat}</p>}
            </div>
            
            <div>
                <label>Longitude:</label>
                <input type="number" value={lng} onChange={(e) => setLng(e.target.value)}/>
                {errors.lng && <p style={{color: "red"}}>{errors.lng}</p>}
            </div>

            <div>
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && (
                <p style={{ color: "red" }}>{errors.address}</p>
              )}
            </div>

            <div>
              <label>Property Description</label>
              <textarea
                value={propertyDescription}
                onChange={(e) => setPropertyDescription(e.target.value)}
              ></textarea>
              {errors.propertyDescription && (
                <p style={{ color: "red" }}>{errors.propertyDescription}</p>
              )}
            </div>

            <div>
              <label>Property Category</label>
              <select
                value={propertycategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
              >
                <option value=""></option>
                <option value="FLAT">FLAT</option>
                <option value="APPARTMENT">APPARTMENT</option>
                <option value="LAND">LAND</option>
                <option value="DUPLEX">DUPLEX</option>
                <option value="WAREHOUSE">WAREHOUSE</option>
                <option value="SHOP">SHOP</option>
              </select>
              {errors.propertycategory && (
                <p style={{ color: "red" }}>{errors.propertycategory}</p>
              )}
            </div>

            <div>
              <label>Total Area</label>
              <input
                type="number"
                value={totalArea}
                onChange={(e) => setTotalArea(e.target.value)}
              />
              {errors.totalArea && (
                <p style={{ color: "red" }}>{errors.totalArea}</p>
              )}
            </div>

            <div>
              <label> Property Use: </label>
              <select
                value={propertyuse}
                onChange={(e) => setPropertyuse(e.target.value)}
              >
                <option value=""></option>
                <option value="RESIDENTIAL">RESIDENTIAL</option>
                <option value="COMMERCIAL">COMMERCIAL</option>
              </select>
              {errors.propertyuse && (<p style={{color: "red"}}>{errors.propertyuse}</p>)}
            </div>
            
            <div>
              <label>Payment Plan</label>
              <select
                value={paymentPlan}
                onChange={(e) => setPaymentPlan(e.target.value)}
              >
                <option value=""></option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="PER_ANNUM">PER_ANNUM</option>
                <option value="PER_PLOT">PER_PLOT</option>
                <option value="PER_DAY">PER_DAY</option>
              </select>
              {errors.paymentPlan && (
                <p style={{ color: "red" }}>{errors.paymentPlan}</p>
              )}
            </div>

            <div>
              <label>Bedrooms</label>
              <input
                type="number"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
              {errors.bedrooms && (
                <p style={{ color: "red" }}>{errors.bedrooms}</p>
              )}
            </div>

            <div>
              <label>Bathrooms</label>
              <input
                type="number"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
              {errors.bathrooms && (
                <p style={{ color: "red" }}>{errors.bathrooms}</p>
              )}
            </div>

            <div>
              <label>Parking Space</label>
              <input
                type="number"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
              />
              {errors.parking && (
                <p style={{ color: "red" }}>{errors.parking}</p>
              )}
            </div>

            <div>
              <label>Toilets</label>
              <input
                type="number"
                value={toilets}
                onChange={(e) => setToilets(e.target.value)}
              />
              {errors.toilets && (
                <p style={{ color: "red" }}>{errors.toilets}</p>
              )}
            </div>

            <div>
              <label>Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value=""></option>
                <option value="RENT">RENT</option>
                <option value="LEASE">LEASE</option>
                <option value="SALES">SALES</option>
              </select>
              {errors.propertyType && (
                <p style={{ color: "red" }}>{errors.propertyType}</p>
              )}
            </div>


            <div>
              <label>Property Image</label>
              <input
                type="text"
                value={propertyImage}
                onChange={(e) => setPropertyImage(e.target.value)}
              />
              {errors.propertyImage && (
                <p style={{ color: "red" }}>{errors.propertyImage}</p>
              )}
            </div>

            <div>
              <label>Agent Name</label>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
              {errors.agentName && (
                <p style={{ color: "red" }}>{errors.agentName}</p>
              )}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;