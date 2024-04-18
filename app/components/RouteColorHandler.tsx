"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RouteColorHandler = () => {
    const pathName = usePathname();
  
    useEffect(() => {
        const root = document.documentElement;
        let gradientStart = "blue";
        let gradientEnd = "purple";

        if (pathName.startsWith("/contact")) {
            gradientStart = "var(--gradient-start-contact)";
            gradientEnd = "var(--gradient-end-contact)";
          } else if (pathName.startsWith("/coding")) {
            gradientStart = "var(--gradient-start-coding)";
            gradientEnd = "var(--gradient-end-coding)";
          } else {
            gradientStart = "var(--gradient-start-home)";
            gradientEnd = "var(--gradient-end-home)";
          }

        root.style.setProperty("--gradient-start", gradientStart);
        root.style.setProperty("--gradient-end", gradientEnd);
    }, [pathName]);
    
    return null;
};

export default RouteColorHandler;