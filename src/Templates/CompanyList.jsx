import React from "react";
import { Link } from "react-router-dom";
import "./JoblyAppStyles.css";
import useConfirmLoggedIn from "../Helpers/useConfirmLoggedIn";

const CompanyList = ({ companies }) => {
  useConfirmLoggedIn();

  return (
    <div>
      <section className="section-container">
        <h1 className="title-container">Companies</h1>
        {companies.map((company) => (
          <div className="item-container" key={company.handle}>
            <Link to={`/companies/${company.handle}`}>
              <h2>{company.name}</h2>
            </Link>
            {company.num_employees !== null && (
              <p>Employees: {company.num_employees}</p>
            )}
            <p>{company.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CompanyList;





