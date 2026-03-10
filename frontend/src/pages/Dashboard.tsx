import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>ECO-SMART BIN</h1>
        </div>
        <div className="nav-actions">
          <span className="welcome-text">Welcome, {user?.first_name || user?.username}!</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <h2>Dashboard</h2>
          <p>Welcome to your Eco-Smart Bin dashboard. Manage your sustainable waste solutions here.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">🌱</div>
            <h3>Your Eco-Score</h3>
            <p className="eco-score">0</p>
            <p className="card-description">Keep recycling to earn more eco-creds!</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">♻️</div>
            <h3>Items Recycled</h3>
            <p className="eco-score">0</p>
            <p className="card-description">Total items recycled this month</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🌍</div>
            <h3>CO2 Saved</h3>
            <p className="eco-score">0kg</p>
            <p className="card-description">Carbon footprint reduced</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>Recycling Rate</h3>
            <p className="eco-score">0%</p>
            <p className="card-description">Your recycling efficiency</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Profile Information</h3>
          <div className="profile-card">
            <div className="profile-item">
              <span className="label">Username:</span>
              <span className="value">{user?.username}</span>
            </div>
            <div className="profile-item">
              <span className="label">Email:</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="profile-item">
              <span className="label">Full Name:</span>
              <span className="value">
                {user?.first_name} {user?.last_name}
              </span>
            </div>
            <div className="profile-item">
              <span className="label">Phone:</span>
              <span className="value">{user?.profile?.phone || 'Not provided'}</span>
            </div>
            <div className="profile-item">
              <span className="label">Address:</span>
              <span className="value">{user?.profile?.address || 'Not provided'}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
