import SideNav from "./SideNav";
import React from "react";
import { useState } from "react";


const CreateAgent = () => {
    const [agentName, setAgentName] = useState("");
    const [agentUsername, setAgentUsername] = useState("");
    const [agentEmail, setAgentEmail] = useState("");
    const [agentPassword, setAgentPassword] = useState("");
    const [agentPhoto, setAgentPhoto] = useState("");
    const [agentPhone, setAgentPhone] = useState("");
    const [agentCompany, setAgentCompany] = useState("");
    const [agentAddress, setAgentAddress] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(agentName, agentEmail, agentPassword, agentPhone, agentCompany, agentAddress);
        if (!validate()) {
            return;
        }
    }
    const validate = () => {
        let errors = {};

        if (!agentName) {
            errors.agentName = "Agent Name is required";
        }
        if (!agentUsername) {
            errors.agentUsername = "Agent Username is required";
        }
        if (!agentEmail) {
            errors.agentEmail = "Agent Email is required";
        }
        if (!agentPassword) {
            errors.agentPassword = "<PASSWORD>";
        }
        if (!agentPhone) {
            errors.agentPhone = "Agent Phone is required";
        }
        if (!agentCompany) {
            errors.agentCompany = "Company Name is required";
        }
        if (!agentAddress) {
            errors.agentAddress = "Agent Address is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    return (
        <div>
            <SideNav />
            <div className="AgentUser-dashboard-container">
                <h1>Add New Property Agent</h1>
                <p>Enter (Agent) Information below. The Agents you add can log into your administration panel with the password and username you specify</p>
                <form className="agent-user-form" onSubmit={handleSubmit}>

                    {errors.agentName && <p style={{ color: "red" }}>{errors.agentName}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Username">Username:</label>
                        <input type="text" placeholder="Enter Username" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
                    </div>

                    {errors.agentName && <p style={{ color: "red" }}>{errors.agentName}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder="Enter Name" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
                    </div>

                    {errors.agentEmail && <p style={{ color: "red" }}>{errors.agentEmail}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Email">Email:</label>
                        <input type="email" placeholder="Enter Email" value={agentEmail} onChange={(e) => setAgentEmail(e.target.value)} />
                    </div>

                    {errors.agentPassword && <p style={{ color: "red" }}>{errors.agentPassword}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Password">Password:</label>
                        <input type="password" placeholder="Enter Password" value={agentPassword} onChange={(e) => setAgentPassword(e.target.value)} />
                    </div>

                    {errors.agentPhoto && <p style={{ color: "red" }}>{errors.agentPhoto}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Photo">Agent Photo:</label>
                        <input type="file" value={agentPhoto} onChange={(e) => setAgentPhoto(e.target.value)} />
                    </div>

                    {errors.agentCompany && <p style={{ color: "red", fontSize : "15px" }}>{errors.agentCompany}</p>}
                    <div>
                        <label>Company</label>
                        <input type="text" placeholder="Enter Company" value={agentCompany} onChange={(e) => setAgentCompany(e.target.value)} />
                    </div>

                    {errors.agentAddress && <p style={{ color: "red" }}>{errors.agentAddress}</p>}
                    <div>
                        <label>Address</label>
                        <input type="text" placeholder="Enter Address" value={agentAddress} onChange={(e) => setAgentAddress(e.target.value)} />
                    </div>

                    {errors.agentPhone && <p style={{ color: "red" }}>{errors.agentPhone}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Phone">Phone:</label>
                        <input type="tel" placeholder="Enter Phone" value={agentPhone} onChange={(e) => setAgentPhone(e.target.value)} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateAgent;