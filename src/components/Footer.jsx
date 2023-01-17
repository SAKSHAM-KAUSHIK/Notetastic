import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <b><p>ⓒ Saksham Kaushik {year}</p></b>
    </footer>
  );
}

export default Footer;
