import React, { useState } from "react";

function CPage() {
  const [topic, setTopic] = useState("intro");

  const topics = {
    intro: {
      title: "Introduction to C",
      text: "C is a general-purpose programming language created by Dennis Ritchie in 1972. It is fast, efficient, and provides low-level memory access.",
      code: `#include <stdio.h>
int main() {
  printf("Hello C!");
  return 0;
}`
    },
    variables: {
      title: "Variables in C",
      text: "A variable is a container for storing values.",
      code: `int age = 20;
float pi = 3.14;
char grade = 'A';`
    },
    datatypes: {
      title: "Data Types in C",
      text: "Common data types: int, float, char, double, long.",
      code: `int a = 10;
float b = 2.5;
char c = 'Z';`
    },
    operators: {
      title: "Operators in C",
      text: "Operators are used to perform operations.",
      code: `int a=10, b=5;
printf("%d", a + b);`
    },
    ifelse: {
      title: "If Else in C",
      text: "Used to make decisions in C.",
      code: `int age = 18;
if (age >= 18) {
  printf("Adult");
} else {
  printf("Minor");
}`
    },
    loops: {
      title: "Loops in C",
      text: "Loops repeat a block of code multiple times.",
      code: `for(int i=1;i<=5;i++){
  printf("%d ", i);
}`
    },
    arrays: {
      title: "Arrays in C",
      text: "Array stores multiple values in a single variable.",
      code: `int marks[3] = {10, 20, 30};
printf("%d", marks[1]);`
    },
    pointers: {
      title: "Pointers in C",
      text: "Pointer stores memory address of a variable.",
      code: `int x = 10;
int *p = &x;
printf("%d", *p);`
    },
    functions: {
      title: "Functions in C",
      text: "Functions help modularize code.",
      code: `int add(int a,int b){
  return a+b;
}`
    },
    strings: {
      title: "Strings in C",
      text: "A string is an array of characters.",
      code: `char name[] = "Yuvraj";
printf("%s", name);`
    }
  };

  const current = topics[topic];

  return (
    <div className="container page-layout">
      <div className="sidebar">
        <h3>C Language</h3>
        {Object.keys(topics).map((key) => (
          <div
            key={key}
            onClick={() => setTopic(key)}
            style={{
              background: topic === key ? "#dbeafe" : "#eef2ff"
            }}
          >
            {topics[key].title}
          </div>
        ))}
      </div>

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
