import React from "react";
import Link from "next/link";

const CodingNav: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="gradient-text text-[10rem]">𝄕</div>    
        <div className="flex flex-col items-center">
          <Link href="/coding/geometry-generator ">GeometryGenerator</Link>
          <Link href="/coding/bebop">Bebop.js</Link>
          <Link href="/coding/beat-cube">Beat Cube</Link>
        </div>
      <div className="gradient-text text-[10rem] scale-x-[-1] mr-1">𝄕</div>
    </div>
  );
};

export default CodingNav;