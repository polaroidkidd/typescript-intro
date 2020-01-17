import React  from 'react';


type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export const Button = ({onClick, children}: Props) => {
  return <button onClick={onClick}>{children}</button>;
};