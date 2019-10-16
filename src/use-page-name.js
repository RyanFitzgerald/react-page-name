import { useEffect } from 'react';

export const usePageName = (name = false) => {
  useEffect(() => {
    // Change the page name if provided
    if (name) {
      document.title = name;
    }
  }, [name]);
};
