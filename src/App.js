import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SingupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Sidebar from './components/sidebar.jsx';
import Topbar from './components/topbar.jsx';
import Portfolio from './components/Portfolio';
import Purchases from './components/Purchases';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthRoute = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex h-screen bg-gray-300">
      {!isAuthRoute && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {!isAuthRoute && <Topbar />}
        <main className="p-4 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <div className="bg-gray-200 min-h-screen">
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <Layout>
              <div className="space-y-6">
                <Portfolio />
                <Purchases />
              </div>
            </Layout>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;