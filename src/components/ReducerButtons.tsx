import React, { useReducer, useRef } from 'react';
import { useClickOutside } from './useClickOutside';

const initialState: State = {rValue: true};

type State = {
  rValue: boolean
}

type Action = {
  type: 'one' | 'two'
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'one': {
      return {
        rValue: true
      };
    }
    case 'two': {
      return {
        rValue: false
      };
    }
    default: {
      return state;
    }
  }
};

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  
   const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, () => {
    console.log("Clicked Outside") // handler passed into useClickOutside
  });
  return (
    <div ref={ref}>
      <button onClick={() => dispatch({type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({type: 'two'})}>Action Two</button>
      {state?.rValue ? <h1>visible</h1> : 'invisible'}
    </div>
  );
};