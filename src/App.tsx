import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Button } from './components/Button';


const App: React.FC = () => {
  
  
  return (
    <>
      <Header
        title={'Hello'}
      />
      <Button
        onClick={(text) => {
          console.log(text);
        }}
      />
    </>
  );
};

export default App;
