import AgentSideNav from "./AgentSideNav";
import { useState } from "react";

const CreateAgentUser = () => {

    const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!FirstName) {
      errors.FirstName = "First Name is required";
    }
    if (!LastName) {
      errors.LastName = "Last Name is required";
    }
    if (!Email) {
      errors.Email = "Email is required";
    }
    if (!Password) {
      errors.Password = "Password is required";
    }
    if (!Phone) {
      errors.Phone = "Phone number is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const userData = {
        first_name: FirstName,
        last_name: LastName,
        email: Email,
        phone: Phone,
        password: Password,
      };

      try {
        const response = await fetch("http://property.reworkstaging.name.ng/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          alert("User created successfully");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setPhone("");
        } else {
          console.error("Failed to create user");
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };

  return (
    <div>
      <AgentSideNav />
      <div className="AgentUser-dashboard-container">
        <h1>Add New User</h1>
        <p>Enter User Information below.</p>
        <form className="agent-user-form" onSubmit={handleSubmit}>
          <div className="agent-user-form-inputs">
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              placeholder="Enter First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.FirstName && (
              <p className="error">{errors.FirstName}</p>
            )}
          </div>

          <div className="agent-user-form-inputs">
            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              id="LastName"
              placeholder="Enter Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.LastName && (
              <p className="error">{errors.LastName}</p>
            )}
          </div>

          <div className="agent-user-form-inputs">
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="Password"
              placeholder="Enter Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.Password && (
              <p className="error">{errors.Password}</p>
            )}
          </div>

          <div className="agent-user-form-inputs">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.Email && <p className="error">{errors.Email}</p>}
          </div>

          <div className="agent-user-form-inputs">
            <label htmlFor="Phone">Phone:</label>
            <input
              type="tel"
              id="Phone"
              placeholder="Enter Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.Phone && <p className="error">{errors.Phone}</p>}
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAgentUser;