import React from 'react';


type Props = {
  title: string,
  isActive?: boolean // optional
}

// isActive is now optional and therefor needs a default argument in case this isn't provided.
export const Header: React.FC<Props> = ({title, isActive= true}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};