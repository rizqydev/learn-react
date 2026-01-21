import { useEffect, useState } from "react";

export function useOnline(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    function handleOnline() {
      console.log("handle online")
      setIsOnline(true);
    }

    function handleOffline() {
      console.log("handle offline")
      setIsOnline(false);
    } 

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline ", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline ", handleOffline);
    }
  }, [])

  return isOnline;
}