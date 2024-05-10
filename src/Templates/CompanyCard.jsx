import React from 'react';
import "./JoblyAppStyles.css"
import { useParams, Navigate } from 'react-router-dom';
import useConfirmLoggedIn from '../Helpers/useConfirmLoggedIn';

const CompanyCard = ({ companies }) => {
    useConfirmLoggedIn();

    const { handle } = useParams();

    const company = companies.find(company => company.handle === handle);

    if (!company) {
        // Redirect to /companies if company not found
        return <Navigate to="/companies" replace />;
    }

    return (

    <section className="section-container">
              <h1 className="title-container">Company Info</h1>
        <div className="item-container">
            <p>Name: {company.name}</p>
            <p>Number of Employees: {company.num_employees}</p>
            <p>Description: {company.description}</p>
        </div>
    </section>
    );
};

export default CompanyCard;

