import React, { useState, useEffect } from "react";

function usePersistedState<T>(key: string, defaultValue: T) {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return (storedValue !== null && storedValue !== "") 
      ? JSON.parse(storedValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
