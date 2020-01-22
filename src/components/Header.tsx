import React from 'react';


type Props = {
  title: string,
  isActive?: boolean
}

export const Header: React.FC<Props> = ({title, isActive = true}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};