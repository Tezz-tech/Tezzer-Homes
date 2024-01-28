import SideNav from "./SideNav";
import React from "react";
import { useState } from "react";
const CreateUser = () => {
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!UserName) {
            errors.UserName = "Name is required";
        }
        if (!Email) {
            errors.Email = "Email is required";
        }
        if (!Password) {
            errors.Password = "password is required";
        }
        if (!Phone) {
            errors.Phone = "Phone-number is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(UserName, Email, Password, Phone);
        }
    }
    return (
        <div>
            <SideNav />
            <div className="AgentUser-dashboard-container">
                <h1>Add New User</h1>
                <p>Enter User Information below.</p>
                <form className="agent-user-form" onSubmit={handleSubmit}>
                <div className="agent-user-form-inputs">
                        <label for="Title">Title:</label>
                        <select name="Title" id="Title" >
                            <option value=""></option>
                            <option value="User">Mr</option>
                            <option value="Agent">Mrs/Miss</option>
                        </select>
                    </div>
                    <div className="agent-user-form-inputs">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder="Enter Name" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    {errors.UserName && <p className="error">{errors.UserName}</p>}
                    <div>
                        <label > Password </label>
                        <input type="password" placeholder="Enter Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {errors.Password && <p className="error">{errors.Password}</p>}

                    <div className="agent-user-form-inputs">
                        <label for="Email">Email:</label>
                        <input type="email" placeholder="Enter Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {errors.Email && <p className="error">{errors.Email}</p>}

                    <div class Name="agent-user-form-inputs">
                        <label for="Phone">Phone:</label>
                        <input type="tel" placeholder="Enter Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    {errors.Phone && <p className="error">{errors.Phone}</p>}

                <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateUser;