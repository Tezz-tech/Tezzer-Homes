import React, { useState } from 'react';

const AdminLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setUsernameError("Username is required");
            setPasswordError("Password is required");
            return;
        } else {
            setUsernameError("");
            setPasswordError("");
        }
    }

    return (
        <div className="Admin-login-page">
            <h1>Admin Login</h1>
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

export default AdminLogin;