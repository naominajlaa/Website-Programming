import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="Navigasi utama">
        <a className="navbar__brand" href="/">
          Web Programming
        </a>
        <ul className="navbar__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
