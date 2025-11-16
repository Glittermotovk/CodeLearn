import React, { useState } from "react";
import axios from "axios";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const submitFeedback = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/feedback/", {
        name,
        email,
        message,
      });

      setStatus("Feedback submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Error sending feedback. Check server.");
    }
  };

  return (
    <div className="container">
      <h2>Feedback</h2>
      <p>We would love to hear from you.</p>

      <form onSubmit={submitFeedback} className="feedback-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          rows="5"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button className="btn">Send Feedback</button>
      </form>

      <p style={{ marginTop: 10 }}>{status}</p>
    </div>
  );
}

export default Feedback;
