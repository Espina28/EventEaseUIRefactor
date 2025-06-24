/**
 * Main App component with routing configuration
 * Features: React Router setup, route protection structure, global layout
 * Routes: Landing page, Home page, Event details, Package details
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Page Components
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import PackageDetailPage from './pages/PackageDetailPage';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * Protected Route wrapper component
 * TODO: Implement actual authentication logic
 * For now, it just renders the children (focusing on structure as requested)
 */
const ProtectedRoute = ({ children }) => {
  // TODO: Add authentication check here
  // const isAuthenticated = checkUserAuth();
  // if (!isAuthenticated) return <Navigate to="/landing" />;
  
  return children;
};

/**
 * Layout wrapper for authenticated pages
 * Includes Navbar and Footer around the main content
 */
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

/**
 * Main App component with routing configuration
 */
const App = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <BrowserRouter>
        <Routes>
          {/* Landing Page Route - for non-logged users */}
          <Route 
            path="/landing" 
            element={<LandingPage />} 
          />
          
          {/* Default route redirects to landing */}
          <Route 
            path="/" 
            element={<Navigate to="/landing" replace />} 
          />
          
          {/* Home Page Route - for logged-in users */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <HomePage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Event Detail Page Route */}
          <Route 
            path="/events/:id" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <EventDetailPage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Package Detail Page Route */}
          <Route 
            path="/packages/:id" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <PackageDetailPage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Placeholder routes for navbar links */}
          <Route 
            path="/events" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <HomePage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/packages" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <HomePage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/about" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <HomePage />
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Placeholder routes for user dropdown */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="pt-20 min-h-screen bg-primary text-white">
                    <div className="container mx-auto px-6 py-20 text-center">
                      <h1 className="text-4xl font-bold mb-4 work-sans-bold">Profile Page</h1>
                      <p className="text-gray-300 inter-regular">Coming Soon...</p>
                    </div>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/reservations" 
            element={
              <ProtectedRoute>
                <MainLayout>
                  <div className="pt-20 min-h-screen bg-primary text-white">
                    <div className="container mx-auto px-6 py-20 text-center">
                      <h1 className="text-4xl font-bold mb-4 work-sans-bold">Reservations Page</h1>
                      <p className="text-gray-300 inter-regular">Coming Soon...</p>
                    </div>
                  </div>
                </MainLayout>
              </ProtectedRoute>
            } 
          />
          
          {/* Login/Logout routes */}
          <Route 
            path="/login" 
            element={
              <div className="min-h-screen bg-primary text-white flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4 work-sans-bold">Login Page</h1>
                  <p className="text-gray-300 inter-regular mb-6">Coming Soon...</p>
                  <button 
                    onClick={() => window.location.href = '/home'}
                    className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors inter-bold"
                  >
                    Continue to Home (Demo)
                  </button>
                </div>
              </div>
            } 
          />
          
          <Route 
            path="/logout" 
            element={<Navigate to="/landing" replace />} 
          />
          
          {/* Catch-all route - redirects unknown paths to landing */}
          <Route 
            path="*" 
            element={<Navigate to="/landing" replace />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;