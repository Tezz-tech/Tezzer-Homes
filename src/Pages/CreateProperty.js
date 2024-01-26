import React from 'react';
import { useState } from 'react';
import SideNav from './SideNav';
const CreateProperty = () => {
    const [propertyName, setPropertyName] = useState("");
    const [propertyPrice, setPropertyPrice] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [longi, setLongi] = useState("");
    const [lati, setLati] = useState("");
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
    const [Fielderr, setFielderr] = useState("");


    const handleInputChange = (e) => {

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFielderr("");
    }

    return (
        <div>
            <SideNav />
            <div className="CreateProperty">
                <h1>Create Property</h1>
                <div className="CreateProperty-container">
                    <form onSubmit={handleSubmit}>
                        {Fielderr && <div style={{ color: "red" }}>{Fielderr}</div>}

                        <div>
                            <label>propertyName</label>
                            <input
                                type="text"
                                value={propertyName}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>propertyPrice</label>
                            <input
                                type="number"
                                value={propertyPrice}
                                onChange={(e) => setPropertyPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>city</label>
                            <input
                                type="number"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>longi</label>
                            <input
                                type="number"
                                value={setLongi}
                                onChange={(e) => setPropertyDescription(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Property Category</label>
                            <input
                                type="text"
                                value={propertycategory}
                                onChange={(e) => setPropertyCategory(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Total Area</label>
                            <input
                                type="text"
                                value={totalArea}
                                onChange={(e) => setTotalArea(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Bedrooms</label>
                            <input
                                type="text"
                                value={bedrooms}
                                onChange={(e) => setBedrooms(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Bathrooms</label>
                            <input
                                type="text"
                                value={bathrooms}
                                onChange={(e) => setBathrooms(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Parking</label>
                            <input
                                type="text"
                                value={parking}
                                onChange={(e) => setParking(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Toilets</label>
                            <input
                                type="number"
                                value={toilets}
                                onChange={(e) => setToilets(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Payment Plan</label>
                            <select
                                value={paymentPlan}
                                onChange={(e) => setpaymentPlan(e.target.value)}
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
    export default CreateProperty;