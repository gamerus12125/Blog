import React from "react";
const SocialMenu = (props) => {
  return (
    <li className="social-menu__item">
      <a className={props.className} href="/" aria-label={props.aria}></a>
    </li>
  );
};
export default SocialMenu;
