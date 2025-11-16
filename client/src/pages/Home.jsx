import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const languages = [
    { name: "C", path: "/c", color: "#007BFF" },
    { name: "Java", path: "/java", color: "#FF5733" },
    { name: "HTML", path: "/html", color: "#FF8C00" },
    { name: "CSS", path: "/css", color: "#0DCAF0" },
    { name: "JavaScript", path: "/javascript", color: "#FFD700" },
  ];

  return (
    <div className="container">
      <h2>Choose a Programming Language</h2>

      <div className="language-slider">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="language-card"
            style={{ background: lang.color, color: "white" }}
            onClick={() => navigate(lang.path)}
          >
            {lang.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
