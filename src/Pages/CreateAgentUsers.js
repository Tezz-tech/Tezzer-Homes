import AgentSideNav from "./AgentSideNav";
import { useState } from "react";

const CreateAgentUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!name) {
            errors.name = "Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (!phone) {
            errors.phone = "Phone is required";
        }
        if (!password) {
            errors.password = "<PASSWORD>";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(name, email, phone, password);
        }
    }

    return (
        <div>
            <AgentSideNav />
            <div className="AgentUser-dashboard-container">
                <h1>Add New User</h1>
                <p>Enter User Information below.</p>
                <form className="agent-user-form" onSubmit={handleSubmit}>
                    {errors.name && <p className="error">{errors.name}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    {errors.email && <p className="error">{errors.email}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Email">Email:</label>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {errors.phone && <p className="error">{errors.phone}</p>}
                    <div className="agent-user-form-inputs">
                        <label for="Phone">Phone:</label>
                        <input type="tel" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                
                <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateAgentUser;