import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ralph - Portfolio. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
