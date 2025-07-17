import React from "react";

const MeetTheDeveloper = () => {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "0 1rem",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      <h1
        style={{ color: "#00f7ff", textAlign: "center", marginBottom: "1rem" }}
      >
        Meet the Developer
      </h1>

      <p>
        Hello! I’m <strong>Ben Kub</strong>, an Occupational Therapy Assistant
        and a passionate Web Application Developer. I specialize in building
        user-friendly, scalable applications using modern technologies like
        React, the MERN stack, and more.
      </p>

      <p>
        Aside from coding, I’m also a professional dog trainer and a tutor in
        subjects including mathematics, English, and statistics. This unique
        blend of skills allows me to approach problem-solving creatively and
        empathetically.
      </p>

      <p>
        This Todo app was built as part of my ongoing journey to develop clean,
        functional, and stylish web apps.
      </p>

      <h2 style={{ color: "#00f7ff", marginTop: "2rem" }}>Get in Touch</h2>
      <p>
        I’m always open to feedback, questions, or collaborations. Feel free to
        reach out via:
      </p>

      <ul>
        <li>
          <a
            href="https://github.com/bkubricky"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00f7ff" }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/bkubricky"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00f7ff" }}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:benkubricky@example.com" style={{ color: "#00f7ff" }}>
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MeetTheDeveloper;
