import React, { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const toggleScrollDirection = () => {
    if (window.scrollY > prevScrollPosition) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setPrevScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
    // cleanup function (when component unmounts)
    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  });

  return scrollDirection;
}
