import React, { FC } from 'react';


type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  // Because we are passing a string into the button component, this will work.
  // However, down the line it will become difficult because you might want to pass a myriad of various
  // components into other components.
  // children: string;
  
}

// Placing the Prop declaration into the arrow handles. Use this only when children are in the mix.
// Otherwise keep on using the previous syntax.
export const Button: React.FC<Props> = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
};