import React, { useState } from "react";

function CPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to C",
      text: "C is a powerful general-purpose programming language. It is fast, portable, and widely used.",
      code: `#include <stdio.h>

int main() {
  printf("Hello C Programming!");
  return 0;
}`
    },

    variables: {
      title: "Variables in C",
      text: "Variables are containers for storing data values.",
      code: `int age = 20;
float pi = 3.14;
char grade = 'A';`
    },

    datatypes: {
      title: "Data Types",
      text: "Basic C data types are int, float, char, double, long.",
      code: `int a = 10;
float b = 2.5;
char c = 'Z';`
    },

    ifelse: {
      title: "If Else Statements",
      text: "If-else used for decisions in C.",
      code: `int age = 18;

if(age >= 18){
  printf("Adult");
} else {
  printf("Minor");
}`
    },

    loops: {
      title: "Loops in C",
      text: "Loops are used to repeat a block of code.",
      code: `for(int i = 1; i <= 5; i++){
  printf("%d ", i);
}`
    },

    functions: {
      title: "Functions in C",
      text: "Functions help break your code into reusable blocks.",
      code: `int add(int a, int b){
  return a + b;
}

int main(){
  printf("%d", add(5, 3));
}`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">

      {/* Sidebar */}
      <div className="sidebar">
        <h3>C Language Topics</h3>

        {Object.keys(topics).map((key) => (
          <div
            key={key}
            onClick={() => setTopic(key)}
            style={{
              background: topic === key ? "#dbe4ff" : "#f2f4ff"
            }}
          >
            {topics[key].title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="content-box">
        <h2>{current.title}</h2>
        <p>{current.text}</p>

        <h3>Example:</h3>

        <pre className="code-block">{current.code}</pre>
      </div>
    </div>
  );
}

export default CPage;
