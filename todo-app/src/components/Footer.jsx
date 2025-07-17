import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

function Footer() {
  // Theme state (default dark)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // Apply theme to document body
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linksStyle}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={iconLinkStyle}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={iconLinkStyle}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div style={textStyle}>
          <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.7 }}>
            ✅ Stay productive, stay sharp. | Built with ⚛️ React
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} FuturoTasks. All rights reserved.
          </p>
        </div>

        <button
          onClick={toggleTheme}
          style={buttonStyle}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </footer>
  );
}

// Styles
const footerStyle = {
  position: "sticky",
  bottom: 0,
  width: "100%",
  backgroundColor: "var(--footer-bg, #0f0f1a)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#888",
  padding: "1rem 2rem",
  boxSizing: "border-box",
  fontFamily: "'Orbitron', sans-serif",
};

const containerStyle = {
  maxWidth: 1280,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
};

const linksStyle = {
  display: "flex",
  gap: "1rem",
};

const iconLinkStyle = {
  color: "#00f7ff",
  transition: "color 0.3s",
  textDecoration: "none",
};

const textStyle = {
  flex: 1,
  minWidth: "200px",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "#00f7ff",
  border: "none",
  borderRadius: "8px",
  padding: "0.4rem 0.8rem",
  cursor: "pointer",
  color: "#0f0f1a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
  transition: "background-color 0.3s, transform 0.3s",
};

export default Footer;
