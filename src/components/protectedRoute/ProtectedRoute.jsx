import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ element: Element }) {
    const { pathname } = useLocation();
    const authkey = localStorage.getItem('authkey');

    if(!authkey && ["/home", "/profile",].includes(pathname)){
        return <Navigate to='/' />;
    } else if(authkey && ["/", "/register"].includes(pathname)) {
        return <Navigate to='/home'/>;
    }
  return <Element />
}
