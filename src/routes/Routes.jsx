import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateNote from "../components/create note/CreateNote";
import App from "../App";
import Register from "../pages/register/Register";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import Login from "../pages/login/Login";
import VerifyEmail from "../components/verify-email/VerifyEmail";

export default function ProjectRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <ProtectedRoute
                element={() => <Login />}
            />
        }
        />
        <Route path="/verifyemail"
          element={<VerifyEmail />}
        />
        <Route path="/register" 
            element={
                  <ProtectedRoute element={() => <Register />}
                />
        } />
        <Route
            path="/home"
            element={
                <ProtectedRoute
                    element={() => <Home />}
                />
            }
        />
      </Routes>
    </Router>
  );
}
