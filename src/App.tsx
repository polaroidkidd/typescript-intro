import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';
import { GlobalContext, initialValues } from './components/GlobalState';

const App: React.FC = () => {
  
  
  return (
    <>
      <GlobalContext.Provider value={initialValues}>
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
        <ReducerButtons/>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
