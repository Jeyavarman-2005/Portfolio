import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-wrapper">
      
      {/* ---------------- NAVIGATION ---------------- */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            Jeyavarman<span>.</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Engineering & AI</a>
            <a href="#skills">Arsenal</a>
          </div>
          <a href="mailto:officialjeyavarman@gmail.com" className="connect-btn">Initiate Contact</a>
        </div>
      </nav>

      <main className="main-container">
        
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="status-badge">
              <span className="pulse-dot"></span> Based in Chennai, India
            </div>
            <h1 className="hero-title">
              Architecting the Physical.<br />
              <span className="text-gradient">Automating the Digital.</span>
            </h1>
            <p className="hero-subtitle">
              Mechanical Engineering Graduate Trainee & Full-Stack AI Developer. 
              I build scalable, industrial-grade AI applications and optimize core mechanical systems. 
              From explicit dynamics in ANSYS to RAG-powered predictive maintenance pipelines.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">Explore Systems</a>
              <a href="https://github.com/Jeyavarman" target="_blank" rel="noopener noreferrer" className="btn-secondary">View GitHub</a>
            </div>
          </div>
        </section>

        {/* ---------------- BENTO GRID: ABOUT & STATS ---------------- */}
        <section id="about" className="section-block">
          <h2 className="section-heading">About</h2>
          
          <div className="bento-grid">
            
            {/* Main Bio Card */}
            <div className="bento-card span-2 bio-card">
              <div className="card-header">
                <span className="icon">🧠</span>
                <h3>Hybrid Intelligence</h3>
              </div>
              <p>
                I don't just design parts; I build the intelligent systems that manufacture and monitor them. 
                With a foundation in core Mechanical Engineering and a deep expertise in Python, React, and PostgreSQL, 
                I bridge the gap between heavy industry and modern software. Whether I'm deploying machine learning regression models 
                for torque prediction or running FEA simulations for aerospace components, my focus is on efficiency, 
                scalability, and precision.
              </p>
              <div className="metrics-row">
                <div className="metric">
                  <h4>9.10</h4>
                  <span>CGPA</span>
                </div>
                <div className="metric">
                  <h4>4</h4>
                  <span>Industry Internships</span>
                </div>
                <div className="metric">
                  <h4>10K</h4>
                  <span>Marathon Runner</span>
                </div>
              </div>
            </div>

            {/* Location & Environment Card */}
            <div className="bento-card environment-card">
              <div className="card-header">
                <span className="icon">🖥️</span>
                <h3>Dev Environment</h3>
              </div>
              <ul className="env-list">
                <li><strong>OS:</strong> Ubuntu Linux</li>
                <li><strong>Deployment:</strong> Docker Containers</li>
                <li><strong>Database:</strong> PostgreSQL (Migrated from MSSQL)</li>
                <li><strong>Financial:</strong> SIP & Exploring Algorithmic Trading </li>
              </ul>
            </div>

            {/* Software Stack Card */}
            <div className="bento-card tech-card">
              <div className="card-header">
                <span className="icon">💻</span>
                <h3>Digital Arsenal</h3>
              </div>
              <div className="pill-grid">
                <span className="pill software">Python Programming</span>
                <span className="pill software">Chatbot Development</span>
                <span className="pill software">React Applications</span>
                <span className="pill software">SQL Handling</span>
                <span className="pill software">Machine Learning</span>
              </div>
            </div>

            {/* Hardware Stack Card */}
            <div className="bento-card tech-card">
              <div className="card-header">
                <span className="icon">⚙️</span>
                <h3>Mechanical Core</h3>
              </div>
              <div className="pill-grid">
                <span className="pill mechanical">SolidWorks</span>
                <span className="pill mechanical">ANSYS Workbench</span>
                <span className="pill mechanical">CATIA V5</span>
                <span className="pill mechanical">Explicit Dynamics</span>
                <span className="pill mechanical">Metrology & GD&T</span>
              </div>
            </div>

            {/* NEW: Presentation & Analytics Card */}
            <div className="bento-card tech-card">
              <div className="card-header">
                <span className="icon">📊</span>
                <h3>Personal Skills</h3>
              </div>
              <div className="pill-grid">
                <span className="pill presentation">Power BI</span>
                <span className="pill presentation">PowerPoint</span>
                <span className="pill presentation">Fluent Communication</span>
                <span className="pill presentation">Dynamic React Dashboards</span>
                <span className="pill presentation">Critical Thinking</span>
                <span className="pill presentation">Team Leading</span>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- EXPERIENCE TIMELINE ---------------- */}
        <section id="experience" className="section-block">
          <h2 className="section-heading">Industrial Experience</h2>
          
          <div className="timeline-container">
            
            {/* Experience 1 */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Project Intern</h3>
                    <h4>Rane (Madras) Limited</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="date">Jan 2025 – Present</span>
                    <span className="location">Chennai, India</span>
                  </div>
                </div>
                <p className="timeline-desc">
                  Building AI-driven solutions and interactive dashboards to automate workflows and significantly reduce manual effort. Proficient in Python, SQL, and data visualization tools to transform complex business data into actionable insights.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>CAE Intern Trainee</h3>
                    <h4>Prime Tooling's</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="date">Jun 2024 – Jul 2024</span>
                    <span className="location">Bengaluru, India</span>
                  </div>
                </div>
                <p className="timeline-desc">
                  Executed advanced aeroelasticity analysis on critical steam turbine blades and rocket engine components. 
                  Utilized ANSYS Workbench for structural/CFD analysis and CATIA V5 for surface modeling, successfully 
                  driving a 2.14% measurable increase in component efficiency.
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Design Intern Trainee</h3>
                    <h4>Motherson Automotive Elastomers (MAE)</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="date">May 2023 – Dec 2023</span>
                    <span className="location">Chennai, India</span>
                  </div>
                </div>
                <p className="timeline-desc">
                  Gained hands-on experience in SolidWorks during my first internship. By analyzing elastomer curing time and material contraction, and conducting multiple sample trials across various temperatures and cycles, I optimized the process to achieve an 8.3 mm material reduction per 100 mm and improved material efficiency by 4.2%.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- DEEP DIVE PROJECTS ---------------- */}
        <section id="projects" className="section-block">
          <h2 className="section-heading">System Architectures</h2>
          
          <div className="project-grid">
            
            {/* Project 1 */}
            <div className="project-card feature-project">
              <div className="project-top">
                <span className="project-category">Chatbot Development (Business Data)</span>
                <h3>Rane Mainta Chatbot</h3>
                <p>
                  An industrial machine maintenance assistant. 
                  Built with a React frontend, FastAPI backend, and PostgreSQL database. 
                  Features integrated RAG (Retrieval-Augmented Generation) machine learning models 
                  to diagnose mechanical breakdowns and predict maintenance schedules based on live machine breaddown data.
                </p>
              </div>
              <div className="project-bottom">
                <div className="tech-tags">
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>Applied ML</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-top">
                <span className="project-category">Aerospace & CAE</span>
                <h3>Autonomous Drone Development</h3>
                <p>
                  End-to-end design, FEA simulation, and fabrication of a custom drone frame. 
                  Conducted explicit dynamics and crashworthiness simulations in ANSYS, proving the structural 
                  superiority of Carbon Fiber over baseline materials for primary structural load paths. 
                  Integrated with computer vision for object counting and mapping.
                </p>
              </div>
              <div className="project-bottom">
                <div className="tech-tags">
                  <span>Carbon Fiber</span>
                  <span>ANSYS Explicit Dynamics</span>
                  <span>SolidWorks</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-top">
                <span className="project-category">Hardware Integration</span>
                <h3>Air Quality UAV System</h3>
                <p>
                  Engineered a fully autonomous UAV payload system for real-time gas leakage and air pollution monitoring. 
                  Designed sensor integration logic to analyze hazardous environments within a 100m radius, completely 
                  eliminating human exposure risks in industrial zones.
                </p>
              </div>
              <div className="project-bottom">
                <div className="tech-tags">
                  <span>IoT Sensors</span>
                  <span>Data Automation</span>
                  <span>UAV Systems</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://github.com/Jeyavarman" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            <a href="https://linkedin.com/in/Jeyavarman" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <a href="mailto:officialjeyavarman@gmail.com">Email Address</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;