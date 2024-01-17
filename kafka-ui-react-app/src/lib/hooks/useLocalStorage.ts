import { LOCAL_STORAGE_KEY_PREFIX } from 'lib/constants';
import { useState, useEffect } from 'react';
import { parse, stringify } from 'lossless-json';

export const useLocalStorage = (featureKey: string, defaultValue: string) => {
  const key = `${LOCAL_STORAGE_KEY_PREFIX}-${featureKey}`;
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);

    if (saved !== null) {
      return parse(saved);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, stringify(value));
  }, [key, value]);

  return [value, setValue];
};
