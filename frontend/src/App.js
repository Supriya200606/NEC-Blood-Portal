import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import About from "./info/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AboutBlood from "./info/AboutBlood";
import Eligibility from "./info/Eligibility";
import Guide from "./info/Guide";
import HelpLine from "./info/HelpLine";
import UpdatePW from './pages/UpdatePW.js';

import Notification from "./info/Notification";
import BloodFind from "./components/BloodFind.js";
import ContactUser from "./components/contactuser.js";
import Repo from "./components/Repo.js";
import BRepo from "./components/Brepo.js";
import Form from "./components/form.js";
import Showform from "./pages/Showform.js";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />

            <Route path="/helpline" element={<HelpLine />} />
            <Route path="/ablood" element={<AboutBlood />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/repo" element={<Repo />} />
            <Route path="/brepo" element={<BRepo />} />
            <Route path="/bfind" element={<BloodFind />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
               <Route 
                path="/upassword" 
                element={
                  <ProtectedRoute>
                    <UpdatePW />
                  </ProtectedRoute>
                } 
              />
            <Route
              path="/form"
              element={
                <ProtectedRoute>
                  <Form />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contactuser"
              element={
                <ProtectedRoute>
                  <ContactUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/showform"
              element={
                <ProtectedRoute>
                  <Showform />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
