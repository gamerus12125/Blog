import React from "react";
const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__text">{props.text}</p>
    </footer>
  );
};
export default Footer;
