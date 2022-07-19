import { useEffect } from 'react';

export function useSetTitle(title) {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}