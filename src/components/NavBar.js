import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => {
        return (
          <a href={`#${link}`} key={index}>
            {links[index]}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
