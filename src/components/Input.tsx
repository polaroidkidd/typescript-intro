import React, { useState } from 'react';

export const Input = () => {
  // Using the union type brackets (<>) we can define a state to be either of type string OR null. This will still throw an error because "value" can not be null
  const [name, setName] = useState("");
  
  return (
    <input value={name} onChange={e => setName(e.target.value)}/>
  );
};