import React, { useReducer } from 'react';

const initialState: State = {rValue: true};

type State = {
  rValue: boolean
}

type Action = {
  type: 'one' | 'two' // using unionTypes to declare a specific set of allowed actions.
  // Optionally define a payload of any type (object, boolean, etc.)
  // payload: string
}


// Syntax for declaring multiple actions. This can also be used to type which payloads will be accepted.
type ActionExtended =
  | { type: 'one', payload: boolean }
  | { type: 'two' }
  | { type: 'three' }
  | { type: 'four' }
  | { type: 'five' };


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
    // Required in order to tell TS what state should be accepted in the default case.
    default: {
      return state;
    }
  }
};

export const ReducerButtons = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({type: 'two'})}>Action Two</button>
      {state?.rValue ? <h1>visible</h1> : 'invisible'}
    </>
  );
};