import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="home-header">
        <a className="logo" href="#">ECO-SMART BIN</a>
        <nav className="home-nav">
          <Link to="/">About Us</Link>
          <Link to="/">Products</Link>
          <Link to="/">How It Works</Link>
        </nav>
        <div className="nav-buttons">
          <Link to="/login" className="btn-login">Log In</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>SUSTAINABLE<br/>LIVING</h1>
        </div>
        <div className="hero-right">
          <img src="/Images/bin.webp" alt="Eco-Smart Bin" />
        </div>
      </section>

      {/* Description */}
      <div className="hero-description">
        <p>Adopting simple habits like reducing plastic use, conserving water, recycling, and using energy-efficient appliances, individuals can significantly reduce their carbon footprint.</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn-login-large">Log In</Link>
          <Link to="/signup" className="btn-signup-large">Sign Up</Link>
        </div>
      </div>

      {/* Recycling Section */}
      <section className="content-section">
        <div className="content-image">
          <img src="/Images/recycle.webp.jpeg" alt="Recycling Process" />
        </div>
        <div className="content-text">
          <h3>RECYCLING PROCESS</h3>
          <h2>Recycling Practices for a Sustainable Future</h2>
          <p>It combines recycling solutions with cutting-edge technologies, highlighting the importance of sustainability.</p>
          <button className="btn-know-more">KNOW MORE</button>
        </div>
      </section>

      {/* Facility Management Section */}
      <section className="content-section2">
        <div className="content-text">
          <h3>FACILITY MANAGEMENT</h3>
          <h2>Efficient Spaces, Safe Places, Sustainable Futures</h2>
          <p>Facility management is the comprehensive coordination and oversight of an organization&apos;s physical infrastructure to ensure efficiency, safety, and sustainability.</p>
        </div>
        <div className="content-image">
          <img src="/Images/pic3.avif.jpeg" alt="Facility Management" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="section-title">
          <h2>Products</h2>
        </div>
        <div className="intro">
          <h3>Our Recycle Solutions</h3>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <h5>Recycled Water Bottles</h5>
            <img src="/Images/WhatsApp Image 2024-09-18 at 19.54.31.jpeg" alt="Recycled Bottle" />
            <p>Eco-Creds are digital credentials that recognize individuals or organizations for their commitment to environmental sustainability and eco-friendly practices.</p>
            <a href="#know-more" className="know-more-btn">Know More</a>
          </div>

          <div className="product-card">
            <h5>ECO-CREDS</h5>
            <img src="/Images/credit_score.avif.jpeg" alt="Eco-Creds" />
            <p>Eco-Creds are digital credentials that recognize individuals or organizations for their commitment to environmental sustainability and eco-friendly practices.</p>
            <a href="#know-more" className="know-more-btn">Know More</a>
          </div>

          <div className="product-card">
            <h5>SURVEY</h5>
            <img src="/Images/survey.jpg.jpeg" alt="Survey" />
            <p>Eco-Creds are digital credentials that recognize individuals or organizations for their commitment to environmental sustainability and eco-friendly practices.</p>
            <a href="#know-more" className="know-more-btn">Know More</a>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="innovations-section">
        <div className="section-title">
          <h2>Our Innovations</h2>
        </div>

        <div className="logo-grid">
          <div className="logo-card">
            <img src="/Images/sm_01.png" alt="AI Recognition" />
            <h5>AI-based Waste Recognition</h5>
            <p>Eco-smart bin uses an AI-based recognition system to identify waste.</p>
          </div>
          <div className="logo-card">
            <img src="/Images/sm_02.png" alt="Auto Sorting" />
            <h5>Automatic Waste Sorting</h5>
            <p>The recognized waste will be then transported to the right fraction. Everything happens 100% automatically.</p>
          </div>
          <div className="logo-card">
            <img src="/Images/sm_03.png" alt="Data Management" />
            <h5>Real-time Data Management</h5>
            <p>All the data Bin-e collects is transferred onto a cloud and processed in real-time.</p>
          </div>
        </div>

        <div className="logo-grid">
          <div className="logo-card">
            <img src="/Images/sm_04.png" alt="Recycling Analysis" />
            <h5>Recycling Analysis</h5>
            <p>Advanced AI technology tracks and analyzes waste recycling.</p>
          </div>
          <div className="logo-card">
            <img src="/Images/sm_05.png" alt="Environmental Monitoring" />
            <h5>Environmental Monitoring</h5>
            <p>Systems for real-time environmental monitoring of waste disposal.</p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="questions-section">
        <div className="questions-container">
          <h2>Got Questions?</h2>
          <p>We are here to help you. Leave us a message and we&apos;ll get back to you with the details as soon as possible.</p>
          <Link to="/signup" className="contact-button">GET STARTED</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h4>ECO-SMART BIN</h4>
            <p>We provide innovative waste management solutions that contribute to a cleaner and greener environment.</p>
          </div>
          <div className="footer-center">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">How it Works</Link></li>
            </ul>
          </div>
          <div className="footer-right">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ECO-SMART BIN. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
