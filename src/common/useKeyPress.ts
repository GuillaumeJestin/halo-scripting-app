import { useState, useEffect, useCallback } from "react";

// Stolen from https://usehooks.com/useKeyPress/

export default function useKeyPress(targetKey: string | string[]): boolean {
  const targetKeys = (typeof targetKey === "string" ? [targetKey] : targetKey).map(key => key.toLowerCase());

  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(({ key }: KeyboardEvent) => {
    if (targetKeys.includes(key.toLowerCase())) {
      setKeyPressed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKeys.join("")]);

  const upHandler = useCallback(({ key }: KeyboardEvent) => {
    if (targetKeys.includes(key.toLowerCase())) {
      setKeyPressed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetKeys.join("")]);

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downHandler, upHandler]);

  return keyPressed;
}