import React from "react";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "40px",
        padding: "20px",
        background: "#0c5eff",
        color: "white",
        textAlign: "center",
        borderRadius: "10px 10px 0 0"
      }}
    >
      © {new Date().getFullYear()} CodeLearn • All Rights Reserved
    </footer>
  );
}

export default Footer;
