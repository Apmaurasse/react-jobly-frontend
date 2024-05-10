import React from "react";
import { useState, useContext, useEffect } from "react";
import JoblyContext from "../JoblyContext";

const Signup = () => {
    const JoblyApi = useContext(JoblyContext); // Access the context
      
    const initialState = {
          username: "",
          first_name: "",
          last_name:"",
          email: "",
          password: "",
          isAdmin: false
          }
      
        const [userData, setUserData] = useState(initialState);
      
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
              await JoblyApi.addUser(userData);
            } 
          catch (error) {
           
            console.error("Error adding new user:", error);
          }
          setUserData(initialState)
        };
      
        useEffect(() => {
          // Fetch updated data after submitting the form
          const fetchData = async () => {
            try {
            } catch (error) {
              console.error("Error fetching updated data:", error);
            }
          };
          fetchData();
        }, [userData]); 

    return (
    <div>
        <section className="section-container">   

        <h1 className="title-container">Signup</h1>     


  <form className="form-container" onSubmit={handleSubmit}>
    <div className="form-item">
      <label htmlFor="username">Username:</label>
      <input 
        id="username" 
        type="text" 
        name="username"
        value={userData.username} 
        onChange={handleChange} />
    </div>

    <div className="form-item">
      <label htmlFor="first_name">First Name:</label>
      <input 
        id="first_name" 
        type="text" 
        name="first_name"
        value={userData.first_name} 
        onChange={handleChange} />
    </div>

    <div className="form-item">
      <label htmlFor="last_name">Last Name:</label>
      <input 
        id="last_name" 
        type="text" 
        name="last_name"
        value={userData.last_name} 
        onChange={handleChange} />
    </div>

    <div className="form-item">
      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        type="email" 
        name="email"
        value={userData.email} 
        onChange={handleChange} />
    </div>

    <div className="form-item">
      <label htmlFor="password">Password:</label>
      <input 
        id="password" 
        type="password" 
        name="password"
        value={userData.password} 
        onChange={handleChange} />
    </div>

    <button type="submit">Submit</button>       
  </form>




        </section>

        </div>
    )
};

export default Signup;

