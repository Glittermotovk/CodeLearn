import React, { useState } from "react";

function HTMLPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to HTML",
      text: "HTML is used to structure web pages.",
      code: `<h1>Hello World</h1>`
    },
    tags: {
      title: "HTML Tags",
      text: "Tags are building blocks of HTML.",
      code: `<p>This is a paragraph</p>`
    },
    lists: {
      title: "Lists",
      text: "HTML supports ordered and unordered lists.",
      code: `<ul><li>Item 1</li><li>Item 2</li></ul>`
    },
    forms: {
      title: "Forms",
      text: "Forms collect user input.",
      code: `<form><input type='text'></form>`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">
      <div className="sidebar">
        <h3>HTML Topics</h3>
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

export default HTMLPage;
