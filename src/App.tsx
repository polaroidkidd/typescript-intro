import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';
import { GlobalProvider } from './components/GlobalState';
import BigC from './components/BigC';

const App: React.FC = () => {
  
  return (
    <GlobalProvider>
      <Header
        title={'Hello'}
      />
      <BigC
        title="Class"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >Hello World
      </Button>
      
      <Input/>
      <ReducerButtons/>
    </GlobalProvider>
  );
};

export default App;
