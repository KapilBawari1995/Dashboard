import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

import Dashboard from '../page/Deshboard/Dashboard';
import Motions from '../page/Motions/Motions';
import Invoices from '../page/Invoices/Invoices';
import Reports from '../page/Reports/Reports';
import Calendar from '../page/Calendar/Calendar';
import DataManagement from '../page/DataManagement/DataManagement';
import Tasks from '../page/Tasks/Tasks';
import Templates from '../page/Templates/Templates';
import Security from '../page/Security/Security';
import Features from '../page/Features/Features';
import Settlements from '../page/Settlements/Settlements';
import Settings from '../page/Settings/Settings';

const Layout = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Sidebar />

          <div className="col-md-10 border-start border-light p-3">
            <main className="p-2 mt-5">
              <Routes>
        
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/motions" element={<Motions />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/data" element={<DataManagement />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/security" element={<Security />} />
                <Route path="/features" element={<Features />} />
                <Route path="/settlements" element={<Settlements />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
