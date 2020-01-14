import React from 'react';


// These are the basic typed props. 
type Props = {
  title: string,
  isActive: boolean
}


export const Header: React.FC<Props> = ({title, isActive}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};