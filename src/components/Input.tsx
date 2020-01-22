import React, { useRef, useState } from 'react';

export const Input = () => {
  const [name, setName] = useState('');
  const ref = useRef<HTMLInputElement>(null!);
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
  );
};