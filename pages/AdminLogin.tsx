// New simplified UI design implementation
import React from 'react';

const AdminLogin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle role-based access control and domain checking logic
    };

    return (
        <div style={{backgroundColor: '#f8f9fa', padding: '20px'}}>
            <h2 style={{color: '#333'}}>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{color: '#555'}}>Username:</label>
                    <input type="text" name="username" required style={{margin: '10px 0', padding: '10px', border: '1px solid #ccc'}}/>
                </div>
                <div>
                    <label style={{color: '#555'}}>Password:</label>
                    <input type="password" name="password" required style={{margin: '10px 0', padding: '10px', border: '1px solid #ccc'}}/>
                </div>
                <button type="submit" style={{padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none'}}>Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;