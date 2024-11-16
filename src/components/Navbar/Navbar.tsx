"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left"> {/* Add logo here */} </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <Link href="#" className="nav-link">
                <i className="fa fa-globe" aria-hidden="true"></i>
                <span id="location-display">United States</span>
              </Link>
            </li>
            <li><Link href="#" className="nav-link">Trip Boards</Link></li>
            <li><Link href="#" className="nav-link">List your property</Link></li>
            <li><Link href="#" className="nav-link">Help</Link></li>
            <li><Link href="#" className="nav-link">My trips</Link></li>
            <li><Link href="#" className="nav-link sign-in">Sign in</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
