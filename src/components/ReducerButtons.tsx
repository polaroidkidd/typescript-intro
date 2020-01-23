import React, { useContext, useReducer, useRef } from 'react';
import { useClickOutside } from './useClickOutside';
import { GlobalContext } from './GlobalState';

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
  // TS implicitly types the React.Context. Attempting to extract non-existent properties will throw errors.
  const {rValue} = useContext(GlobalContext);
  
  const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, () => {
    console.log('Clicked Outside'); // handler passed into useClickOutside
  });
  return (
    <div ref={ref}>
      <button onClick={() => dispatch({type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({type: 'two'})}>Action Two</button>
      {rValue ? <h1>visible</h1> : 'invisible'}
    </div>
  );
};