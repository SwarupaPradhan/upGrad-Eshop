import React from 'react'
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export const Home = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('authenticated');
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
  // Redirect
  return <Navigate replace to="/Login" />;
  } else {
  return (
    <div>Home</div>
  )
}
}
