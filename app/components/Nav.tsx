import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-2">
      <div></div>
      <Link href="/" className="text-darkTextPrimary hover:text-darkTextSecondary">Sam Chaney</Link>
      <div className="gradient-text">𝄆</div>    
      <Link href="/">Home</Link> 
      <div className="gradient-text">𝄀</div>
      <Link href="/coding">Coding</Link>
      {/* <div className="gradient-text">𝄀</div>
      <Link href="/design">Design</Link> */}
      <div className="gradient-text">𝄀</div>
      <Link href="/contact">Contact</Link>
      <div className="gradient-text">𝄇</div>
      <div></div>
    </nav>
  );
};

export default Nav;