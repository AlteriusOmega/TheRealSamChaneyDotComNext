import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links">
        <div className="gradient-text text-xl">{"𝄆"}</div>    
        <Link href="/">Home</Link>
        <div className="gradient-text text-xl">𝄀</div>
        <Link href="/coding">Coding</Link>
        <div className="gradient-text text-xl">𝄀</div>
        <Link href="/contact">Contact</Link>
        <div className="gradient-text text-xl">{"𝄇"}</div>
        </div>
    </nav>
  );
};

export default Nav;