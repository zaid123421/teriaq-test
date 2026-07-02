import { useCallback, useEffect, useState } from "react";

export function useSuccessToast(duration = 5000) {
  const [successBox, setSuccessBox] = useState(false);

  const showSuccess = useCallback(() => {
    setSuccessBox(true);
  }, []);

  useEffect(() => {
    if (!successBox) return undefined;

    const timer = setTimeout(() => {
      setSuccessBox(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [successBox, duration]);

  return [successBox, showSuccess];
}
