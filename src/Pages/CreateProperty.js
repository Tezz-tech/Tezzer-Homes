import React from 'react';
import { useState } from 'react';
import SideNav from './SideNav';
const CreateProperty = () => {
    const [propertyName, setPropertyName] = useState("");
    const [propertyPrice, setPropertyPrice] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    // const [longi, setLongi] = useState("");
    // const [lati, setLati] = useState("");
    const [address, setAddress] = useState("");
    const [propertyDescription, setPropertyDescription] = useState("");
    const [propertycategory, setPropertyCategory] = useState("");
    const [totalArea, setTotalArea] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [parking, setParking] = useState("");
    const [toilets, setToilets] = useState("");
    const [paymentPlan, setpaymentPlan] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [propertyStatus, setPropertyStatus] = useState("");
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
        if (!city) {
            errors.city = "City is required";
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
            errors.propertyType = "property type is required";
        }
        if (!propertyStatus) {
            errors.propertyStatus = "Property Status is required";
        }
        if (!propertyImage) {
            errors.propertyImage = "Property Image is required";
        }
        if (!agentName) {
            errors.agentName = "Please specify an agent";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
    }
    return (
        <div>
            <SideNav />
            <div className="CreateProperty">
                <h1>Create Property</h1>
                <div className="CreateProperty-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>propertyName</label>
                            <input
                                type="text"
                                value={propertyName}
                                onChange={(e) => setPropertyName(e.target.value)}
                            />
                            {errors.propertyName && <p style={{color: "red"}}>{errors.propertyName}</p>}
                        </div>

                        <div>
                            <label>propertyPrice</label>
                            <input
                                type="number"
                                value={propertyPrice}
                                onChange={(e) => setPropertyPrice(e.target.value)}
                            />
                            {errors.propertyPrice && <p style={{color: "red"}}>{errors.propertyPrice}</p>}
                        </div>

                        <div>
                            <label>country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            {errors.country && <p style={{color: "red"}}>{errors.country}</p>}
                        </div>

                        <div>
                            <label>city</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            {errors.city && <p style={{color: "red"}}>{errors.city}</p>}
                        </div>

                        <div>
                            <label>Description</label>
                            <textarea name="description" id="description" cols="30" rows="10" value={propertyDescription} onChange={(e) => setPropertyDescription(e.target.value)}></textarea>
                            {errors.propertyDescription && <p style={{color: "red"}}>{errors.propertyDescription}</p>}
                        </div>

                        <div>
                            <label>Property Category</label>
                            <input
                                type="text"
                                value={propertycategory}
                                onChange={(e) => setPropertyCategory(e.target.value)}
                            />
                            {errors.propertycategory && <p style={{color: "red"}}>{errors.propertycategory}</p>}
                        </div>

                        <div>
                            <label>Total Area</label>
                            <input
                                type="number"
                                value={totalArea}
                                onChange={(e) => setTotalArea(e.target.value)}
                            />
                            {errors.totalArea && <p style={{color: "red"}}>{errors.totalArea}</p>}
                        </div>

                        <div>
                            <label>Bedrooms</label>
                            <input
                                type="number"
                                value={bedrooms}
                                onChange={(e) => setBedrooms(e.target.value)}
                            />
                            {errors.bedrooms && <p>{errors.bedrooms}</p>}
                        </div>

                        <div>
                            <label>Bathrooms</label>
                            <input
                                type="number"
                                value={bathrooms}
                                onChange={(e) => setBathrooms(e.target.value)}
                            />
                            {errors.bathrooms && <p style={{color: "red"}}>{errors.bathrooms}</p>}
                        </div>

                        <div>
                            <label>Parking space</label>
                            <input
                                type="text"
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                            />
                            {errors.parking && <p style={{color: "red"}}>{errors.parking}</p>}
                        </div>

                        <div>
                            <label>Toilets</label>
                            <input
                                type="number"
                                value={toilets}
                                onChange={(e) => setToilets(e.target.value)}
                            />
                            {errors.toilets && <p style={{color: "red"}}>{errors.toilets}</p>}
                        </div>
                        <div>
                            <label>Property Image</label>
                            <input
                            type="file"
                            value={propertyImage}
                            onChange={(e) => setPropertyImage(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Payment Plan</label>
                            <select
                                value={paymentPlan}
                                onChange={(e) => setpaymentPlan(e.target.value)}
                            >
                                <option value=""></option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                            {errors.paymentPlan && <p style={{color: "red"}}>{errors.paymentPlan}</p>}
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProperty