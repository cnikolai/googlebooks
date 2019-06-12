import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand smallfont" href="/">
        Search
      </a>
      <a className="navbar-brand smallfont" href="/">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
