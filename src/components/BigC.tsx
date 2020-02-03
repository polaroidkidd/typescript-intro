import React, { Component } from 'react';

type State = {
  shouldRender: boolean
}


type Props = {
  title: string;
}

class BigC extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>I'm in a class component</h1>
      </div>
    );
  }
}

export default BigC;