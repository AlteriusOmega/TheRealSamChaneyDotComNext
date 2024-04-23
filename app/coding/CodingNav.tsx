import React from "react";
import Link from "next/link";

const CodingNav: React.FC = () => {
  return (
    <div className="flex items-center sticky top-[39.5vh] lg:ml-[-40px] ml-3">
      <div className="gradient-text text-[10rem] ml-[-40px] mr-[-30px] mb-[-20px]">𝄕</div>    
      <div className="flex flex-col items-center">
        <h1 className="text-l">Projects:</h1>
        <Link href="/coding/this-site ">ThisSite</Link>
        <Link href="/coding/geometry-generator ">GeoGen</Link>
        <Link href="/coding/bebop">Bebop.js</Link>
        <Link href="/coding/beat-cube">BeatCube</Link>
        </div>
      <div className="gradient-text text-[10rem] scale-x-[-1] ml-[-30px] mb-[-20px] mr-5">𝄕</div>
      </div>
  );
};

export default CodingNav;