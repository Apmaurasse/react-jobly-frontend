import React, { useEffect, useState } from "react";

const Homepage = () => {
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        // Retrieve user data from localStorage
        const currentUserJSON = localStorage.getItem('currentUser');
        if (currentUserJSON) {
            const currentUser = JSON.parse(currentUserJSON);
            // Extract first_name from user data
            setFirstName(currentUser.first_name);
        }
    }, []);

    return (
        <div>
            <section className="section-container">
                <h1 className="title-container">
                    Jobly
                </h1>
                {firstName && (
                    <p className="title-container">Welcome back, {firstName}!</p>
                )}
            </section>
        </div>
    );
};

export default Homepage;



