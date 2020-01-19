import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Input } from './components/Input';


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
      
      <Input/>
    </>
  );
};

export default App;
