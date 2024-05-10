import React from "react";
import { createBrowserRouter, Route, Navigate, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Homepage from "./Templates/Homepage";
import CompanyList from "./Templates/CompanyList";
import CompanyCard from "./Templates/CompanyCard";
import JobList from "./Templates/JobList";
import JobCard from "./Templates/JobCard";
import Login from "./Templates/Login";
import LoggedOut from "./Templates/LoggedOut";
import Signup from "./Templates/Signup";
// import Users from "./Templates/Users";
import ProfileEditPage from "./Templates/ProfileEditPage";
import RootLayout from "./Templates/RootLayout";





const JoblyRoutes = ({ companies, jobs, firstName, lastName, loginKey, logoutKey, updateKey}) => { // Receive companies prop
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout firstName={firstName} lastName={lastName} logoutKey={logoutKey} />}>
                <Route index element={<Homepage />} />
                <Route path="/companies" element={<CompanyList companies={companies} />} /> 
                <Route path="/companies/:handle" element={<CompanyCard companies={companies}/>} />
                <Route path="/jobs" element={<JobList jobs={jobs}/>} />
                <Route path="/jobs/:id" element={<JobCard jobs={jobs}/>} />
                <Route path="/login" element={<Login loginKey={loginKey}/>} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/users" element={<Users />} /> */}
                {/* <Route path="/users/:username" /> */}
                <Route path="/profileeditpage/" element={<ProfileEditPage updateKey={updateKey}/>} />
                <Route path="/logoutconfirmation" element={<LoggedOut />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};

export default JoblyRoutes