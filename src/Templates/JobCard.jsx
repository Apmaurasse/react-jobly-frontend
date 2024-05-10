import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useConfirmLoggedIn from '../Helpers/useConfirmLoggedIn';
import "./JoblyAppStyles.css";


const JobCard = ({ jobs }) => {
    useConfirmLoggedIn();

    const { id } = useParams();

    const job = jobs.find(job => job.id === id);

    if (!job) {
        // Redirect to /jobs if job not found
        return <Navigate to="/jobs" replace />;
    }

    return (
    <div>
    <section className="section-container">
    <h1 className="title-container">Job Info</h1>
        <div className="item-container">
            <p>Title: {job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
        </div>
    </section>
    </div>
    );
};

export default JobCard;