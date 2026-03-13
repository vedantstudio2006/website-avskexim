import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Logic 1: For the Origin Page (Where you click)
export function useSectionNavigation() {
  const navigate = useNavigate();

  // This function takes the path and the section ID as arguments
  const navigateToSection = (path: string, sectionId: string) => {
    // Combines them into a route like "/services#customs-clearance"
    navigate(`${path}#${sectionId}`);
  };

  return navigateToSection;
}

// Logic 2: For the Destination Page (Where you land)
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      
      // A small setTimeout ensures React has finished drawing the DOM 
      // (like rendering heavy tables or maps) before trying to scroll.
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); 
    }
  }, [location]); // Re-runs if the URL hash changes
}