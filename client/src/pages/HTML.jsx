import React from "react";

function HTML() {
  return (
    <div className="container">
      <h2>HTML (HyperText Markup Language)</h2>

      <p>
        HTML web pages ka structure banane ke liye use hoti hai. Yeh tags ke
        through content ko organize karti hai.
      </p>

      <h3>Example:</h3>

      <pre className="code-block">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello HTML!</h1>
    <p>This is my first paragraph.</p>
  </body>
</html>`}
      </pre>
    </div>
  );
}

export default HTML;
