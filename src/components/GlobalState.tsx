import React, { createContext, useReducer } from 'react';


export const initialValues = {
  rValue: true,
  // This creates an implied context without having to explicitly type it.
  // It allows us to assign the dispatch functions (turnOn & turnOff) in the `value` prop
  // passed in the `<GlobalContext.Provider ...` component
  turnOn: () => {},
  turnOff: () => {}
};

export const GlobalContext = createContext(initialValues);

type State = {
  rValue: boolean
}

type Action = {
  type: 'on' | 'off'
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'on': {
      return {
        rValue: true
      };
    }
    case 'off': {
      return {
        rValue: false
      };
    }
    default: {
      return state;
    }
  }
};


export const GlobalProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  
  return (
    <GlobalContext.Provider value={{
      rValue: state.rValue,
      turnOn: () => dispatch({type: 'on'}),
      turnOff: () => dispatch({type: 'off'})
    }}>
      {children}
    </GlobalContext.Provider>
  );
};