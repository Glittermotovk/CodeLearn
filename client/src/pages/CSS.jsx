import React from "react";

function CSS() {
  return (
    <div className="container">
      <h2>CSS (Cascading Style Sheets)</h2>

      <p>
        CSS web pages ko style karne ke liye use hoti hai.  
        Colors, layout, spacing, animations — sab CSS se control hota hai.
      </p>

      <h3>Example:</h3>

      <pre className="code-block">
{`h1 {
  color: blue;
  font-size: 32px;
}

p {
  background: yellow;
  padding: 10px;
}`}
      </pre>
    </div>
  );
}

export default CSS;
