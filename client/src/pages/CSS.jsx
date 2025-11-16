import React, { useState } from "react";

function CSSPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to CSS",
      text: "CSS styles HTML pages using selectors and properties.",
      code: `h1 { color: blue; }`
    },
    selectors: {
      title: "Selectors",
      text: "Selectors target HTML elements.",
      code: `p { font-size: 20px; }`
    },
    colors: {
      title: "Colors",
      text: "CSS supports RGB, HEX, HSL colors.",
      code: `body { background: #f2f2f2; }`
    },
    flexbox: {
      title: "Flexbox",
      text: "Flexbox helps layout items easily.",
      code: `display: flex; justify-content: center;`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">
      <div className="sidebar">
        <h3>CSS Topics</h3>
        {Object.keys(topics).map((key) => (
          <div
            key={key}
            onClick={() => setTopic(key)}
            style={{ background: topic === key ? "#dbeafe" : "#eef2ff" }}
          >
            {topics[key].title}
          </div>
        ))}
      </div>

      <div className="content-box">
        <h2>{current.title}</h2>
        <p>{current.text}</p>
        <pre className="code-block">{current.code}</pre>
      </div>
    </div>
  );
}

export default CSSPage;
