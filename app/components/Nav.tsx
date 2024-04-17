import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
    return (
        <nav className="nav-container">
            <div className="gradient-text" style={{fontSize:"10em"}}>{"𝄕"}</div>    
            <ul>

                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/coding">Coding</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className="gradient-text" style={{fontSize:"10em", transform: "scaleX(-1)"}}>{"𝄕"}</div>    

        </nav>
    );
};

export default Nav;