import React, { useState } from "react";

function JavaPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to Java",
      text: "Java is an object-oriented programming language used for mobile apps and backend systems.",
      code: `class Main {
  public static void main(String[] args){
    System.out.println("Hello Java!");
  }
}`
    },
    variables: {
      title: "Variables",
      text: "Variables store data values.",
      code: `int age = 20;
String name = "Yuvraj";`
    },
    datatypes: {
      title: "Data Types",
      text: "Java has primitive and non-primitive data types.",
      code: `int a=10;
float f=2.3f;
char c='A';`
    },
    loops: {
      title: "Loops in Java",
      text: "Java supports for, while, do-while.",
      code: `for(int i=1;i<=5;i++){
  System.out.println(i);
}`
    },
    oops: {
      title: "OOP Concepts",
      text: "Java uses OOP concepts like Class, Object, Inheritance, Polymorphism.",
      code: `class Car {
  void drive(){ System.out.println("Driving..."); }
}`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">
      <div className="sidebar">
        <h3>Java Topics</h3>
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

export default JavaPage;
