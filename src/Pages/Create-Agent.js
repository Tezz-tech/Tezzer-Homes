import SideNav from "./SideNav";
import React, { useState, useEffect } from "react";

const CreateAgent = () => {
    const [agentName, setAgentName] = useState("");
    const [agentEmail, setAgentEmail] = useState("");
    const [agentPassword, setAgentPassword] = useState("");
    const [agentPhone, setAgentPhone] = useState("");
    const [agentCompany, setAgentCompany] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        // Additional logic can be added here if needed when the component mounts
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        setIsLoading(true);

        const createAgentData = {
            full_name: agentName,
            company: agentCompany,
            email: agentEmail,
            phone: agentPhone,
            password: agentPassword,
        };
        let getToken = localStorage.getItem("Admin_Token");

        try {
            // Make API call here
            const response = await fetch('http://property.reworkstaging.name.ng/v1/merchants/agents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization" : `Bearer ${getToken}` 
                },
                body: JSON.stringify(createAgentData),
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            setIsSuccess(true);
            // Handle the successful API response, if needed
            console.log(data);
        } catch (error) {
            setApiError('Error creating agent. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const validate = () => {
        let errors = {};

        if (!agentName) {
            errors.agentName = "Agent Name is required";
        }
        if (!agentEmail) {
            errors.agentEmail = "Agent Email is required";
        }
        if (!agentPassword) {
            errors.agentPassword = "Password is required";
        }
        if (!agentPhone) {
            errors.agentPhone = "Agent Phone is required";
        }
        if (!agentCompany) {
            errors.agentCompany = "Company Name is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div>
            <SideNav />
            <div className="AgentUser-dashboard-container">
                <h1>Add New Property Agent</h1>
                <p>Enter (Agent) Information below. The Agents you add can log into your administration panel with the password and username you specify</p>
                <form className="agent-user-form" onSubmit={handleSubmit}>
                    <div className="agent-user-form-inputs">
                        <label htmlFor="Name">Name:</label>
                        <input type="text" placeholder="Enter Name" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
                        {errors.agentName && <p style={{ color: "red" }}>{errors.agentName}</p>}
                    </div>

                    <div className="agent-user-form-inputs">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" placeholder="Enter Email" value={agentEmail} onChange={(e) => setAgentEmail(e.target.value)} />
                        {errors.agentEmail && <p style={{ color: "red" }}>{errors.agentEmail}</p>}
                    </div>

                    <div className="agent-user-form-inputs">
                        <label htmlFor="Password">Password:</label>
                        <input type="password" placeholder="Enter Password" value={agentPassword} onChange={(e) => setAgentPassword(e.target.value)} />
                        {errors.agentPassword && <p style={{ color: "red" }}>{errors.agentPassword}</p>}
                    </div>

                    <div className="agent-user-form-inputs">
                        <label htmlFor="Phone">Phone:</label>
                        <input type="tel" placeholder="Enter Phone" value={agentPhone} onChange={(e) => setAgentPhone(e.target.value)} />
                        {errors.agentPhone && <p style={{ color: "red" }}>{errors.agentPhone}</p>}
                    </div>

                    <div className="agent-user-form-inputs">
                        <label htmlFor="Company">Company:</label>
                        <input type="text" placeholder="Enter Company" value={agentCompany} onChange={(e) => setAgentCompany(e.target.value)} />
                        {errors.agentCompany && <p style={{ color: "red", fontSize: "15px" }}>{errors.agentCompany}</p>}
                    </div>

                    <button>Create</button>
                    {isLoading && <p>Loading...</p>}
                    {isSuccess && <p>Agent created successfully!</p>}
                    {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                </form>
            </div>
        </div>
    );
};

export default CreateAgent;
