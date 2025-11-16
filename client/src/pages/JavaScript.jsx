import React, { useState } from "react";

function JavaScriptPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to JavaScript",
      text: "JavaScript is used to make web pages interactive.",
      code: `console.log("Hello JavaScript!");`
    },
    variables: {
      title: "Variables",
      text: "JS has var, let, and const variables.",
      code: `let a = 10; const b = 20;`
    },
    functions: {
      title: "Functions",
      text: "Functions are reusable blocks of code.",
      code: `function add(a,b){ return a+b; }`
    },
    loops: {
      title: "Loops",
      text: "JS supports for, while, do-while.",
      code: `for(let i=1;i<=5;i++){ console.log(i); }`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">
      <div className="sidebar">
        <h3>JavaScript</hh3>
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

export default JavaScriptPage;
