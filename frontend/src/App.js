import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast"; // 👈 ADD THIS

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
import UpdatePW from "./pages/UpdatePW";
import Notification from "./info/Notification";
import BloodFind from "./components/BloodFind";
import ContactUser from "./components/contactuser";
import Repo from "./components/Repo";
import BRepo from "./components/Brepo";
import Form from "./components/form";
import Showform from "./pages/Showform";

// ✅ Forgot + Reset Password Pages
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) return <Navigate to="/login" />;

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>

        {/* ✅ Toast Notification System Global */}
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Forgot & Reset Password Pages */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Layout Wrapper */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/helpline" element={<HelpLine />} />
            <Route path="/ablood" element={<AboutBlood />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/repo" element={<Repo />} />
            <Route path="/brepo" element={<BRepo />} />
            <Route path="/bfind" element={<BloodFind />} />

            {/* Protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute><Profile /></ProtectedRoute>
              }
            />

            <Route
              path="/upassword"
              element={
                <ProtectedRoute><UpdatePW /></ProtectedRoute>
              }
            />

            <Route
              path="/form"
              element={
                <ProtectedRoute><Form /></ProtectedRoute>
              }
            />

            <Route
              path="/contactuser"
              element={
                <ProtectedRoute><ContactUser /></ProtectedRoute>
              }
            />

            <Route
              path="/showform"
              element={
                <ProtectedRoute><Showform /></ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
