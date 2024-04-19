import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between pb-5 pt-3">
      <div></div>
      {/* <img src="/sam_chaney_logo.svg" className="gradient-text h-20 mr-[-20px]"/> */}
      <div className="flex items-center">
        <div className="gradient-text text-6xl font-bold">{"𝄕"}</div>
        <Link href="/" className="text-darkTextPrimary text-2xl px-3 hover:text-darkTextSecondary">Sam Chaney</Link>
        <div className="gradient-text scale-x-[-1] text-6xl font-bold">{"𝄕"}</div>
      </div>
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