import React from "react";
const MainMenu = (props) => {
  return (
    <li className="main-menu__item">
      <a className="main-menu__link" href="/">
        {props.text}
      </a>
    </li>
  );
};
export default MainMenu;
