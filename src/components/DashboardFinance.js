// src/pages/FinanceDashboard.js
import React from "react";
import "../styles/DashboardFinance.css";
import { useNavigate } from "react-router-dom";

function FinanceDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="finance-dashboard-container">
      {/* Header */}
      <div className="finance-header">
        <div className="finance-left">
          <div className="finance-logo">
            <img
              src="https://www.tqm.co.th/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftqm-static%2Fassets%2Flogo-darkblue-TQM-70-years.png&w=256&q=75"
              alt="TQM Logo"
              height="40"
            />
            <strong>Finance Dashboard</strong>
          </div>
        </div>

        <div className="finance-center">
          <input type="text" placeholder="Search Reference ID..." className="search-input" />
        </div>

        <div className="finance-right">
          <div className="finance-status-boxes">
            <div className="status success">Paid</div>
            <div className="status pending">Pending</div>
            <div className="status failed">Failed</div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="finance-table-container">
        <table>
          <thead>
            <tr>
              <th>order</th>
              <th>Time</th>
              <th>Reference 1</th>
              <th>Reference 2</th>
              <th>Channel</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INV-001</td>
              <td>CUS-2025</td>
              <td>
                <span className="status success small">Paid</span>
              </td>
              <td>2,000 ฿</td>
              <td>24 Jun 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigation arrows */}
      <div className="finance-nav-arrows">
        <button className="arrow">&#8592;</button>
        <button className="arrow">&#8594;</button>
      </div>

      {/* Logout Button - Center Bottom */}
      <div className="logout-section">
        <button onClick={handleLogout} className="logout-button center">
          Logout
        </button>
      </div>
    </div>
  );
}

export default FinanceDashboard;
