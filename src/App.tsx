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
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >Hello World
      </Button>
    </>
  );
};

export default App;
