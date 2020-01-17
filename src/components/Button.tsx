import React from 'react';


type Props = {
  // onClick: Function // function (lower-case "f") is not recognized. Topic of chapter 7.
  // method returns a string
  // onClick(): string // function which returns a string.
  
  // method which does not anything.
  // onClick(value: string): void
  
  // most common way to type a function.
  onClick: (text: string) => void;
}


export const Button = ({onClick}: Props) => {
  return <button onClick={() => onClick('hi there')}>Click Me</button>;
};