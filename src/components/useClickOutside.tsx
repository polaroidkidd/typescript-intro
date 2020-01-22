import React, { useEffect } from 'react';


const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {
    
    const listener = (event: MouseEvent | TouchEvent) => {
      // If there is no ref, do nothing.
      // If the ref contains the target (click on the ref), do nothing.
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      // Otherwise, fire the event (click outside the item)
      // handler(event);
      
      
      // Need to declare the event as a React.MouseEvent<HTMLElement> in the hook definition
      handler(event);
      
      
      // This is a bug between JS and React. The only way to fix this is to
      // declare the event.target coming in as Node
      // if (!ref.current || ref.current.contains(event.target)) {
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener );
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      
    };
    // only run if the handler or the ref has changed
  }, [handler, ref]);
};

export { useClickOutside };