import React from "react";
import Link from "next/link";

const CodingNav: React.FC = () => {
    return (
        <nav className="nav-container">
            <div className="gradient-text" style={{fontSize:"10rem"}}>{"𝄕"}</div>    
            <ul>
                <li>
                    <Link href="/coding/geometry-generator">Geometry Generator</Link>
                </li>
                <li>
                    <Link href="/coding/bebop">Bebop.js</Link>
                </li>
                <li>
                    <Link href="/coding/beat-cube">Beat Cube</Link>
                </li>
            </ul>
            <div className="gradient-text" style={{fontSize:"10rem", transform: "scaleX(-1)"}}>{"𝄕"}</div>    

        </nav>
    );
};

export default CodingNav;