import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JoblyContext from "../JoblyContext";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";

const ProfileEditPage = ({updateKey}) => {
    useConfirmLoggedIn();

    const JoblyApi = useContext(JoblyContext);
    const navigate = useNavigate();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("currentUser")) || {};

    // Initialize state with user data fetched from localStorage
    const [userData, setUserData] = useState({
        id: storedUserData.id,
        username: storedUserData.username || "", 
        first_name: storedUserData.first_name || "",
        last_name: storedUserData.last_name || "",
        email: storedUserData.email || "",
        password: storedUserData.password || "", // Assuming you don't want to populate password field
        error: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the updateUser function with updated user data
            await JoblyApi.updateUser(userData);
            // Redirect to profile page after successful update
            navigate("/");
        } catch (error) {
            setUserData((prevData) => ({
                ...prevData,
                error: error.message
            }));
        }
        updateKey();
    };

    return (
        <div>

            <section className="section-container"> 

            <h1 className="title-container">Profile Edit Page</h1> 

                <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-item">
                        <label htmlFor="id">User id</label> 
                        <input 
                            id="id" 
                            type="text" 
                            name="id" 
                            value={userData.id} 
                            onChange={handleChange}
                            readOnly />
                    </div>
                    <div className="form-item">
                        <label htmlFor="first_name">First Name</label> 
                        <input 
                            id="first_name" 
                            type="text" 
                            name="first_name" 
                            value={userData.first_name} 
                            onChange={handleChange} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="last_name">Last Name</label> 
                        <input 
                            id="last_name" 
                            type="text" 
                            name="last_name" 
                            value={userData.last_name} 
                            onChange={handleChange} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label> 
                        <input 
                            id="email" 
                            type="text" 
                            name="email" 
                            value={userData.email} 
                            onChange={handleChange} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label> 
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            value={userData.password} 
                            onChange={handleChange} />
                    </div>
                    {/* Add other fields (firstName, lastName, email) similarly */}
                    <button type="submit">Update</button>
                </form>
                {userData.error && (
                    <p>{userData.error}</p>
                )}
            </section>
        </div>
    );
};

export default ProfileEditPage;

