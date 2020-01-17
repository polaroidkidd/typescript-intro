import React  from 'react';


type Props = {
  // React has its own set of Events, such as React.MouseEvent. This will accept events for all clicks (bad)
  // onClick: (e: React.MouseEvent) => void;
  
  // Now it is specified to only accept events from a button click (good)
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  
  // Basic input event for forms.
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}


export const Button: React.FC<Props> = ({onClick}) => {
  return <button onClick={onClick}>Click Me</button>;
};