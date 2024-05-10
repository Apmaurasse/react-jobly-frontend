import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JoblyContext from "../JoblyContext";

const Login = ({loginKey}) => {
    const navigate = useNavigate();
    const JoblyApi = useContext(JoblyContext);

    const initialState = {
        username: "",
        password: "",
        error: ""
    };

    const [loginData, setLoginData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Call findUser function from JoblyApi class to verify credentials
            await JoblyApi.findUser(loginData);
            console.log("Login successful!");
            navigate('/'); // Redirect after successful login
            loginKey(); // Update the key in the parent component
        } catch (error) {
            // If there's an error, handle it
            console.error("Error:", error.message);
            if (error.message === "User not found") {
                setLoginData((prevData) => ({
                    ...prevData,
                    error: "Invalid username/password"
                }));
            } else {
                setLoginData((prevData) => ({
                    ...prevData,
                    error: error.message
                }));
            }
        }
        setLoginData((prevData) => ({
            ...prevData,
            username: "",
            password: ""
        }));
    };

    return (
        <div>


            <section className="section-container">   
    
            <h1 className="title-container">Login</h1> 

                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label htmlFor="username">Username:</label>
                            <input 
                                id="username" 
                                type="text" 
                                name="username"
                                value={loginData.username} 
                                onChange={handleChange} />
                        </div>

                        <div className="form-item">
                            <label htmlFor="password">Password:</label>
                            <input 
                                id="password" 
                                type="password" 
                                name="password"
                                value={loginData.password} 
                                onChange={handleChange} />
                        </div>
                        
                        {loginData.error && (
                            <div className="error-message" style={{ color: 'red' }}>{loginData.error}</div>
                        )}

                        <button type="submit">Submit</button>       
                    </form>
               
            </section>
        </div>
    );
};

export default Login;





