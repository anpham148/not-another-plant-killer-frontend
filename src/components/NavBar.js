import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated && user) {
        return (
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                
             <NavLink 
               style={{ marginRight: '10px' }} 
               to="/"
             >
               Home
             </NavLink>
             <NavLink 
               style={{ marginRight: '10px' }} 
               to="/plants"
             >
               Plants
             </NavLink>
            
             <NavLink 
               style={{ marginRight: '10px' }} 
               to="/profile/plants"
             >
               Your Garden
             </NavLink>
             <NavLink 
               style={{ marginRight: '10px' }} 
               to="/profile/collections"
             >
               Collections
             </NavLink>
              
             <LogoutButton />
            
           </div>
         );
     } else {
        return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/plants"
        >
          Plants
        </NavLink>
         
        <LoginButton />
       
      </div>
        )
     };
    
    

      
};

export default NavBar;