import React, { useContext, useRef } from 'react';
import { useClickOutside } from './useClickOutside';
import { GlobalContext } from './GlobalState';


export const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const context = useContext(GlobalContext);
  const {rValue, turnOn, turnOff} = context;
  
  
  useClickOutside(ref, () => {
    console.log('Clicked Outside'); // handler passed into useClickOutside
  });
  return (
    <div ref={ref}>
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
      {rValue ? <h1>visible</h1> : <h1>invisible</h1>}
    </div>
  );
};