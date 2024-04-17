"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const RouteColorHandler = () => {
    const router = useRouter();
    const pathName = usePathname();
  
    useEffect(() => {
        const root = document.documentElement;
        let gradientStart = "blue";
        let gradientEnd = "purple";
    
        switch (pathName) {
            case "/contact":
                gradientStart = "var(--gradient-start-contact)"
                gradientEnd = "var(--gradient-end-contact)"
                break;
            case "/coding":
                gradientStart = "var(--gradient-start-coding)"
                gradientEnd = "var(--gradient-end-coding)"
                break;
            default:
                gradientStart = "var(--gradient-start-home)"
                gradientEnd = "var(--gradient-end-home)"
        }
    
        root.style.setProperty("--gradient-start", gradientStart);
        root.style.setProperty("--gradient-end", gradientEnd);
    }, [pathName]);
    
    return null;
};

export default RouteColorHandler;