import { useState } from "react";

export function useDisableCursor() {
  const [disableCursor, setDisableCursor] = useState(false);
  const disableCursorHandler = () => {
    setDisableCursor(true);
    setTimeout(() => {
      setDisableCursor(false);
    }, 1000);
  };
  return [disableCursor, disableCursorHandler];
}
