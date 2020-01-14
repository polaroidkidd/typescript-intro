import React from 'react';


// Common types.
type Props = {
  title: string, //strings
  isActive?: boolean //booleans
}

export const Header: React.FC<Props> = ({title, isActive= true}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};