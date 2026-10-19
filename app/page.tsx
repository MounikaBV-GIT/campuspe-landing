"use client";

import { useState } from "react";
import "./page.css";

const opportunities = [
  { company: "Google", role: "Software Engineering Intern", type: "Internship", color: "#4285f4" },
  { company: "Microsoft", role: "Frontend Developer", type: "Full-time", color: "#737373" },
  { company: "Amazon", role: "SDE Intern", type: "Internship", color: "#ff9900" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo"><span>campus</span><b>pe</b></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#opportunities">Opportunities</a>
          <a href="#colleges">For Colleges</a>
          <a href="#employers">For Employers</a>
          <a href="#app">Download App</a>
          <a href="#login" className="login">Log in</a>
          <a href="#signup" className="primary-btn">Sign up free ↗</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">✦ YOUR CAREER STARTS HERE</span>
          <h1>India’s #1 platform for<br /><span>student careers</span></h1>
          <p>Internships, jobs, and career opportunities — all in one place. Your future starts with one click.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#opportunities">Explore opportunities ↗</a>
            <a className="secondary-btn" href="#app">Get the app ↓</a>
          </div>
          <div className="trust"><span>★★★★★</span> Trusted by students across India</div>
        </div>

        <div className="hero-cards">
          <article className="floating-card card-one">
            <div className="card-top"><span className="round-icon purple">✦</span><span className="tag">FEATURED</span></div>
            <h3>Find your dream<br />internship</h3>
            <p>Discover opportunities that match your goals.</p>
            <div className="mini-avatars"><i>M</i><i>A</i><i>R</i><span>+2k students</span></div>
          </article>
          <article className="floating-card card-two">
            <span className="round-icon blue">↗</span>
            <h3>Build your career</h3>
            <p>Skills, experience, and connections to get ahead.</p>
            <div className="progress"><span /></div>
            <small>Career profile <b>85%</b></small>
          </article>
          <article className="floating-card card-three">
            <div className="company-mark">in</div><div><b>New opportunity!</b><p>Product Design Intern</p><small>Just posted · Bengaluru</small></div>
          </article>
          <div className="hero-orb">✦</div>
        </div>
      </section>

      <section className="stats">
        <div><h2>2M+</h2><p>Students empowered</p></div>
        <div><h2>10K+</h2><p>Hiring partners</p></div>
        <div><h2>50K+</h2><p>Opportunities listed</p></div>
        <div><h2>500+</h2><p>Colleges onboarded</p></div>
      </section>

      <section className="partners">
        <p>CONNECTING STUDENTS WITH LEADING COMPANIES</p>
        <div className="partner-logos"><b>Google</b><b>Microsoft</b><b>amazon</b><b>Infosys</b><b>Wipro</b></div>
      </section>

      <section className="section opportunities" id="opportunities">
        <div className="section-heading"><div><span className="eyebrow">YOUR NEXT BIG MOVE</span><h2>Opportunities made for <span>you.</span></h2><p>Explore curated roles from companies looking for talent like you.</p></div><a className="secondary-btn" href="#all">View all opportunities ↗</a></div>
        <div className="filters"><button className="selected">✦ All opportunities</button><button>Internships</button><button>Full-time jobs</button><button>Remote</button></div>
        <div className="job-grid">
          {opportunities.map((job) => <article className="job-card" key={job.company}>
            <div className="job-company"><span className="company-logo" style={{ background: job.color }}>{job.company[0]}</span><span className="tag">{job.type}</span></div>
            <h3>{job.role}</h3><p>{job.company} · India</p>
            <div className="job-bottom"><span>✧ Early career</span><a href="#signup">View role ↗</a></div>
          </article>)}
        </div>
      </section>

      <section className="resume-section">
        <div><span className="eyebrow">STAND OUT FROM THE CROWD</span><h2>Your resume deserves<br /><span>to be noticed.</span></h2><p>Create your profile, showcase your skills, and let the right opportunities find you.</p><a className="primary-btn" href="#signup">Build your profile ↗</a></div>
        <div className="resume-preview"><div className="resume-head"><span className="round-icon purple">✦</span><div><b>Your Career Profile</b><p>Make your first impression count</p></div></div><div className="resume-line long" /><div className="resume-line" /><div className="resume-line medium" /><div className="resume-score"><div className="score-circle">85%</div><div><b>Profile strength</b><p>You're off to a great start!</p></div></div></div>
      </section>

      <section className="section split-section" id="colleges">
        <div className="split-icon">🎓</div><div><span className="eyebrow">FOR INSTITUTIONS</span><h2>Empower your students.<br /><span>Elevate your campus.</span></h2><p>Connect students to opportunities, track placements, and build a stronger career ecosystem.</p><a className="secondary-btn" href="#signup">Discover CampusPe for colleges ↗</a></div>
      </section>

      <section className="section split-section employer" id="employers">
        <div className="split-icon">🚀</div><div><span className="eyebrow">FOR EMPLOYERS</span><h2>Meet your next great<br /><span>hire, right here.</span></h2><p>Find motivated students and fresh graduates ready to make an impact.</p><a className="secondary-btn" href="#signup">Hire emerging talent ↗</a></div>
      </section>

      <section className="app-section" id="app">
        <div><span className="eyebrow">YOUR CAREER. YOUR POCKET.</span><h2>Opportunity doesn't<br />wait. <span>Neither should you.</span></h2><p>Discover jobs, track applications, and take your next step — anytime, anywhere.</p><a className="primary-btn" href="#signup">Get started today ↗</a></div>
        <div className="phone"><div className="phone-speaker" /><div className="phone-brand">campus<b>pe</b></div><p>Hey there! 👋</p><h3>Your future looks bright.</h3><div className="phone-job"><b>Product Design Intern</b><p>Creative Studio · Bengaluru</p><span>View opportunity ↗</span></div><div className="phone-job"><b>Frontend Developer</b><p>Tech company · Remote</p><span>View opportunity ↗</span></div></div>
      </section>

      <section className="support"><span className="round-icon blue">✉</span><h2>We're here for your next step.</h2><p>Questions? Our team is always happy to help you get started.</p><a className="secondary-btn" href="mailto:support@campuspe.com">Contact support ↗</a></section>

      <footer><a href="#" className="logo"><span>campus</span><b>pe</b></a><p>Connecting ambition with opportunity.</p><div className="footer-links"><a href="#opportunities">Opportunities</a><a href="#colleges">For Colleges</a><a href="#employers">For Employers</a><a href="#app">Download App</a></div><small>© 2026 CampusPe. All rights reserved.</small></footer>
    </main>
  );
}