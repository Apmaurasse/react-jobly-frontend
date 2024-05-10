import React, { useState, useEffect } from "react";
import JoblyRoutes from "./JoblyRoutes";
import JoblyApi from "./Api";
import { JoblyProvider } from "./JoblyContext";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function from uuid package

const JoblyFrontendApp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [key, setKey] = useState(0); // Key for forcing remount

    useEffect(() => {
        // Retrieve user data from localStorage
        const currentUserJSON = localStorage.getItem('currentUser');
        if (currentUserJSON) {
            const currentUser = JSON.parse(currentUserJSON);
            // Extract first_name from user data
            setFirstName(currentUser.first_name);
            setLastName(currentUser.last_name);
        } else {
            // No user data found, reset first and last name
            setFirstName("");
            setLastName("");
        }
    }, [key, firstName, lastName]); // Use key as dependency

    useEffect(() => {
        async function fetchData() {
            try {
                const companiesData = await JoblyApi.getCompanies();
                const jobsData = await JoblyApi.getJobs();
                // Generate unique IDs for each job
                const jobsWithIds = jobsData.map(job => ({ ...job, id: uuidv4() }));
                setCompanies(companiesData);
                setJobs(jobsWithIds);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false); 
            }
        }
        fetchData();
    }, [key, firstName, lastName]); // Use key as dependency

    const loginKey = () => {
        setKey(prevKey => prevKey + 1);
    };

    const logoutKey = () => {
        setKey(prevKey => prevKey - 1); 
    };

    const updateKey = () => {
        setKey(prevKey => prevKey + 1);
    }

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <JoblyProvider key={key}>
            <JoblyRoutes companies={companies} jobs={jobs} firstName={firstName} lastName={lastName} key={key} loginKey={loginKey} logoutKey={logoutKey} updateKey={updateKey}/>
        </JoblyProvider>
    );
}

export default JoblyFrontendApp;


