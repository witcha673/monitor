import "../styles/DashboardIT.css";
import { useNavigate } from "react-router-dom";
import Mock from "../assets/Mock";
import React from "react";


function ITDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>TQM IT Monitor</h2>
        <input type="text" placeholder="Search by Ref ID" />
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-table-wrapper">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Time</th>
              <th>Reference 1</th>
              <th>Reference 2</th>
              <th>Channel</th>
              <th>Amount</th>
              <th>API Status</th>
              <th>API Response</th>
            </tr>
          </thead>
          <tbody>
            {Mock.map((item, index) => (
              <tr key={item.BBLCallbackLogId}>
                <td>{index + 1}</td>
                <td>{item.TransDateTimeConvert}</td>
                <td>{item.Reference1}</td>
                <td>{item.Reference2}</td>
                <td>{item.ReceiveBookCode}</td>
                <td>{parseFloat(item.ReceiveAmount).toLocaleString()} ฿</td>
                <td>{item.InsertStatus === "1" ? "Success" : "Fail"}</td>
                <td className={item.IsSuccess === "1" ? "status-success" : "status-fail"}>
                  {item.IsSuccess === "1" ? "OK" : "ERROR"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ITDashboard;