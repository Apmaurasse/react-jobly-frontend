import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'



const RootLayout= ({firstName, lastName, logoutKey}) => {
  

  return (
    <div>
        
        <header>
        <NavBar firstName={firstName} lastName={lastName} logoutKey={logoutKey}/>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
};


export default RootLayout;
