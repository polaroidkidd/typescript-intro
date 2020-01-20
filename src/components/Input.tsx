import React, { useRef, useState } from 'react';

export const Input = () => {
  const [name, setName] = useState('');
  
  // Type refs by declaring what type of HTML Element they will be attached to.
  // Adding the "!" to the end of "null" declares it as a read-only value (very typical for refs)
  const ref = useRef<HTMLInputElement>(null!);
     // This is equivalent to tbe above null-checks
  // console.log(ref?.current?.value);
  
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
  );
};