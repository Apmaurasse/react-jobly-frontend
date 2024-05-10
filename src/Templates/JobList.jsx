import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";
import "./JoblyAppStyles.css";

const JobList = ({ jobs }) => {
  useConfirmLoggedIn();

  // State to track which jobs have been applied to
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const savedJobs = localStorage.getItem("appliedJobs");
    return savedJobs ? JSON.parse(savedJobs) : {};
  });

  // Save appliedJobs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  // Function to handle applying to a job
  const handleApply = jobId => {
    setAppliedJobs(prevState => ({
      ...prevState,
      [jobId]: true
    }));
  };

  return (
    <div>
      <section className="section-container">
        <h1 className="title-container">Jobs</h1>
        {jobs.map(job => (
          <div className="item-container" key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              <h2>{job.title}</h2>
            </Link>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            <Link to={`/companies/${job.company_handle}`}><p>Company Info</p>
            </Link>
            {/* Render Apply button if job has not been applied to, otherwise render Applied button */}
            {appliedJobs[job.id] ? (
              <button className="dark-red-button">Applied</button>
            ) : (
              <button className="red-button" onClick={() => handleApply(job.id)}>
                Apply
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobList;


