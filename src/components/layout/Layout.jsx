import React from "react";
import Nav from "../modules/Navbar";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      {children}

      <footer></footer>
    </div>
  );
}

export default Layout;
