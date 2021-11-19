import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    path: " ",
    text: "Home",
  },
  {
    id: 2,
    path: "about",
    text: "O nama",
  },
  {
    id: 3,
    path: "contact",
    text: "Kontakt",
  },
  {
    id: 4,
    path: "*",
    text: "NotMatch",
  },
];
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1>This is Navbar field</h1>
      <ul>
        {links.map((link) => {
          if (link.text !== "NotMatch") {
            return (
              <li key={link.id}>
                <NavLink to={link.path} activeClassName="active-link">
                  {link.text}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default Navbar;
