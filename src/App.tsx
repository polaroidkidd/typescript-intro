import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';



function f() {

}

const User = ({email, name}: User) => {
};
const App: React.FC = () => {
  return (
    <>
      <Header
        title={'Hello'}
        status={'loading'}
        thing={12}
        thing2={['item 1', 'item 2']}
        thing3={{}}
        thing4={{name: 'Daniel'}}
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default App;
