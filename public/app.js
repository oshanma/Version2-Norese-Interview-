import React from 'react';
import ReactDOM from 'react-dom';

const Dashboard = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className="logo">Student Interview</div>
        </nav>
      </header>

      <main className="dashboard container">
        <h1 className="welcome-message">Hi, Oshan. Continue learning!</h1>

        <div className="tracks-container">
          <div className="track-card">
            <div className="track-header">
              <h2 className="track-title">Fast Track</h2>
              <div className="track-icon fast">⚡</div>
            </div>
            <p className="track-lessons">16 VIDEO LESSONS</p>
            <button className="track-button primary">Continue</button>
          </div>

          <div className="track-card">
            <div className="track-header">
              <h2 className="track-title">Mastery Track</h2>
              <div className="track-icon mastery">★</div>
            </div>
            <p className="track-lessons">50 VIDEO LESSONS</p>
            <button className="track-button secondary">Start Now</button>
          </div>
        </div>

        <div className="curriculum-grid">
          <div className="curriculum-card">
            <div className="curriculum-icon">💡</div>
            <div className="curriculum-content">
              <h3>Interview Playbooks</h3>
              <p>170 VIDEO LESSONS</p>
            </div>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">🔍</div>
            <div className="curriculum-content">
              <h3>Job Search Curriculum</h3>
              <p>8 VIDEO LESSONS</p>
            </div>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">📝</div>
            <div className="curriculum-content">
              <h3>Resume Curriculum</h3>
              <p>8 VIDEO LESSONS</p>
            </div>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">📄</div>
            <div className="curriculum-content">
              <h3>Written Curriculum</h3>
              <p>9 WRITTEN MODULES</p>
            </div>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">🤝</div>
            <div className="curriculum-content">
              <h3>Negotiation Curriculum</h3>
              <p>11 VIDEO LESSONS</p>
            </div>
          </div>

          <div className="curriculum-card">
            <div className="curriculum-icon">📅</div>
            <div className="curriculum-content">
              <h3>First 90 Days Curriculum</h3>
              <p>27 VIDEO LESSONS</p>
            </div>
          </div>
        </div>

        <section className="help-section">
          <h2>We're here to help!</h2>
          <p>Our Help Center is full of valuable insights. Check some of our articles.</p>
          
          <div className="help-grid">
            <div className="help-card">
              <h3>Helpful Get Started Videos</h3>
              <a href="#">WATCH NOW →</a>
            </div>

            <div className="help-card">
              <h3>System Requirements</h3>
              <a href="#">READ ARTICLE →</a>
            </div>

            <div className="help-card">
              <h3>Practice Section: Mock Interviews</h3>
              <a href="#">READ ARTICLE →</a>
            </div>

            <div className="help-card">
              <h3>Learn Section: Interview Training</h3>
              <a href="#">READ ARTICLE →</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById('root')); 