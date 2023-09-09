import { useState, useEffect } from "react";

export function useOrigin() {
  const [isMounted, setIsMounted] = useState(false);
  const origin = window.location.origin || "";
  //   const origin =
  //     typeof window !== "undefined" && window.location.origin
  //       ? window.location.origin
  //       : "";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return "";
  }

  return origin;
}
