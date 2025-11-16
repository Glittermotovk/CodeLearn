import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const languages = [
    { name: "C Language", short: "C", path: "/c", color: "#2563eb" },
    { name: "Java Programming", short: "Java", path: "/java", color: "#ef4444" },
    { name: "HTML", short: "HTML", path: "/html", color: "#f97316" },
    { name: "CSS", short: "CSS", path: "/css", color: "#0ea5e9" },
    { name: "JavaScript", short: "JS", path: "/javascript", color: "#eab308" }
  ];

  return (
    <div>
      
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to CodeLearn</h1>
        <p>
          Learn programming languages with clean explanations, examples and 
          real project-based learning — Just like W3Schools but even better!
        </p>
      </div>

      {/* LANGUAGES SECTION */}
      <div className="container">
        <h2 style={{ marginBottom: "15px" }}>Choose a Language</h2>

        <div className="language-slider">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="language-card"
              onClick={() => navigate(lang.path)}
              style={{
                background: lang.color,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: "800" }}>
                {lang.short}
              </span>
              <span style={{ fontSize: "15px", opacity: "0.9" }}>
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container">
        <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
          Why Choose CodeLearn?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          
          <div className="content-box">
            <h3>📘 Easy Explanations</h3>
            <p>Each topic is broken down in the simplest way with examples.</p>
          </div>

          <div className="content-box">
            <h3>⚡ Fast Learning</h3>
            <p>Learn faster with clean notes and highlighted code blocks.</p>
          </div>

          <div className="content-box">
            <h3>💻 Real Examples</h3>
            <p>Every topic comes with real code examples to help you master it.</p>
          </div>

          <div className="content-box">
            <h3>📱 Fully Responsive</h3>
            <p>Website looks beautiful on mobile and desktop.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
