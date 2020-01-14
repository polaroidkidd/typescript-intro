import React from 'react';



// User Type
type User = {
  name: string;
}


// Common types.
type Props = {
  title: string, //strings
  isActive?: boolean //booleans
  thing: number // numbers
  thing2: string[] //arrays of strings || booleans || numbers
  status: 'loading' | 'loaded' // Union Type. Accepts only one of these two strings
  thing3: object // this is an empty object. can also be declared using {}
//  thing4: User | {}  the above is typically declared like this, if at all.
  thing4: {
    name: string;
  }
  func: () => void // Define functions. Quite common
  user: User
}

export const Header: React.FC<Props> = ({title, isActive, thing, thing2, thing3, thing4}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};