// AgentLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AgentLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setUsernameError("Username is required");
            setPasswordError("Password is required");
            return;
        } else {
            setUsernameError("");
            setPasswordError("");
        }

        const agentDetails = {
            email: username,
            password: password
        };

        fetch('http://property.reworkstaging.name.ng/v1/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(agentDetails)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                const agentToken = data.data.token;
                const agentId = data.data.id;
                localStorage.setItem("Agent_Token", agentToken);
                localStorage.setItem("Agent_Id", agentId);
                navigate('/AgentAdmin');
            })
            .catch((err) => {
                console.log(err.message);
            })
    };

    return (
        <div className="Admin-login-page">
            <h1 style={{ fontWeight: "bold" }}>Agent Login</h1>
            <form onSubmit={handleSubmit} className='Admin-login-form'>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
                <button type="submit" className='Admin-login-btn'>Login</button>
            </form>
        </div>
    );
}

export default AgentLogin;
