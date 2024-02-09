import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Account = ({ open, handleClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: "0804784758",
      password: password,
    };

    try {
      const response = await fetch('http://property.reworkstaging.name.ng/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Account created successfully');
        alert('Account created successfully');
        // Reset form fields or perform other necessary actions
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Failed to create account');
        alert('Failed to create account');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert(`Error during registration: ${error.message || 'Unknown error'}`);
    }
  };

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://property.reworkstaging.name.ng/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('Login successful:', responseData);
        const userToken = responseData.data;
        console.log(userToken);
        
      } else {
        console.error('Login failed:', responseData.error || 'Unknown error');
        alert(`Login failed: ${responseData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error during login:', error.message || 'Unknown error');
      alert(`Error during login: ${error.message || 'Unknown error'}`);
    }
  };

  const isRegisterFormValid = firstName && lastName && email && password;
  const isLoginFormValid = loginEmail && loginPassword;

  const style = {
    padding: '40px 100px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'white',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mt: 2, backgroundColor: 'white', width: '600px', margin: 'auto', marginTop: '150px !important', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        >
          <Tab label="Register" />
          <Tab label="Login" />
        </Tabs>
        {activeTab === 0 ? (
          <Box sx={style}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: '#ff3b03', padding: '14px', borderRadius: '30px', fontWeight: 'bold', fontSize: '18px', '&:hover': { backgroundColor: '#ff3b03' } }}
              disabled={!isRegisterFormValid}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        ) : (
          <Box sx={style}>
            <TextField
              label="Email"
              fullWidth
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, backgroundColor: '#ff3b03', padding: '14px', borderRadius: '30px', fontWeight: 'bold', fontSize: '18px', '&:hover': { backgroundColor: '#ff3b03' } }}
              disabled={!isLoginFormValid}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default Account;
