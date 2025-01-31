import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home';
import About from './info/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register'
import { AuthProvider, useAuth } from './context/AuthContext';
import AboutBlood from './info/AboutBlood';
import Eligibility from './info/Eligibility';
import Guide from './info/Guide';
import HelpLine from './info/HelpLine';
import Blog from './info/Blog';
import Campaigns from './info/Campaigns';
import Notification from './info/Notification';
import Volunteer from './pages/Volunter';
import BloodFind from "./components/BloodFind.js";
import ContactUser from "./components/contactuser.js";
import Repo from "./components/Repo.js";
import BRepo from "./components/Brepo.js";
import Form from "./components/form.js"; 
import Showform from './pages/Showform.js';


// Protected Route Component
import Bank from './info/bank';
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

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <Router>
        
            <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<Layout />}>
            <Route path="/register" element={<Register />} />
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/bank" element={<Bank />} />
              
              <Route path="/helpline" element={<HelpLine />} />
              <Route path="/ablood" element={<AboutBlood />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/repo" element={<Repo />} />
          <Route path="/brepo" element={<BRepo />} />
          <Route path="/bfind" element={<BloodFind />} />
              {/* Protected Routes */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
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
                    <Showform/>
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