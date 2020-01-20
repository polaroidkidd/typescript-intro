# React TypeScript Basics
This contents of this repo is based off of the excellent [course](https://www.scotttolinski.com/) by [Scott Tolinski](https://www.scotttolinski.com/)

## 03. Typed Props

`type Props` can be declared as a `type` or as an `interface`. 

What should I use? According to [this](https://medium.com/@koss_lebedev/type-aliases-vs-interfaces-in-typescript-based-react-apps-e77c9a1d5fd0)

  >  If you write object-oriented code — use interfaces, if you write functional code — use type aliases.

The main difference is

  > interfaces are more “extendable” due to the support of declaration merging, and types are more “composable” due to support of union types.

Basically, you can extend existing interfaces which might become confusing in a large code base.

Example:

```typescript jsx
interface IUser {
  firstName: string
  lastName: string
}

interface IUser {
  age: number
}

const user: IUser = {
  firstName: 'Jon',
  lastName: 'Doe',
  age: 25,
}
```

Now to the course. This is how you declare and use a `type` in a Functional TS React Component

```typescript jsx
import React from 'react';

// type declaration:
type Props = {
  title: string,
  isActive: boolean
}

export const Header: React.FC<Props> = ({title, isActive}) => {
  return (
    <>
      <h1>{title}</h1>
      {isActive && <h3> Active</h3>}
    </>
  );
};
```

## 04. Default & Optional Props

Props can be marked as optional using the `?`. If this is done, the component requires the prop to contain a default value.

```typescript jsx
import React from 'react';


type Props = {
  title: string,
  isActive?: boolean // optional
}

// isActive is now optional and therefor needs a default argument in case this isn't provided.
export const Header: React.FC<Props> = ({title, isActive= true}) => {

[...]

}

```


## 05. Types

This video covers some common types. It does not go into specifics about how you would create these when you'd actually use the `<Header [...]/>` component.


```typescript jsx
// User Type
type User = {
  name: string;
}
// Common types.
type Props = {
  title: string, //strings
  isActive?: boolean //booleans
  thing: number // numbers
  thing2: string[] //arrays of strings || booleans || numbers
  status: 'loading' | 'loaded' // Union Type. Accepts only one of these two strings
  thing3: object // this is an empty object. can also be declared using {}
//  thing4: User | {}  the above is typically declared like this, if at all.
  thing4: {
    name: string;
  }
  func: () => void // Define functions. Quite common
  user: User
}
```


## 06. Function Props


Way in which a function can be typed.

```typescript jsx
import React from 'react';


type Props = {
  // onClick: Function // function (lower-case "f") is not recognized. Topic of chapter 7.
  // method returns a string
  // onClick(): string // function which returns a string.
  
  // method which does not anything.
  // onClick(value: string): void
  
  // most common way to type a function.
  onClick: (text: string) => void;
}


export const Button: React.FC<Props> = ({onClick}) => {
  return <button onClick={() => onClick("hi there")}>Click Me</button>;
};
```


Accompanying App.tsx. Notice that I don't pass in the value to be logged in App.tsx but in Button.tsx

```typescript jsx
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

```


## 07. React Events in TypeScript

React has its own set of Events, such as React.MouseEvent. This will accept events for all clicks (bad)
```typescript jsx
import React from "react"

type Props = {
  onClick: (e: React.MouseEvent) => void;
}
```

Now it is specified to only accept events from a button click (good)
```typescript jsx
import React from "react"

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

```


## 08. Typing Children Props

The example below is receiving a `string` element as a child. 

Because we are passing a string into the button component, this will work. However, down the line it will become difficult because you might want to pass a myriad of various
components into other components.

```typescript jsx
import React from 'react';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: string;
}

// Placing the Prop declaration into the arrow handles. Use this only when children are in the mix. 
// Otherwise keep on using the previous syntax.
export const Button = ({onClick, children: Props}) => {
  return <button onClick={onClick}>{children}</button>;
};
```

In order to solve this, declare the react component with `React.FC<Props>`. Placing the Prop declaration into the arrow handles. Use this only when children are in the mix. Otherwise keep on using the previous syntax. This way it merges the Props which are expected from `React.FC` with the props we declared.

```typescript jsx
import React from 'react';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
};
```

## 09. Typing useState

Because the default state is set to '', typescript will automatically recognized that the `useState` instance  accepts texts values. TypeScript is doing it's job implicity.
```typescript jsx
import React from 'react';

export const Input = () => {
  const [name, setName] = React.useState('');
  return (
    <input value={name} onChange={e => setName(e.target.value)}/>
  );
};
```

Using the union type brackets (<>) we can define a state to be either of type string OR null. This will still throw an error because "value" can not be null.

```typescript jsx
import React, { useState } from 'react';

export const Input = () => {
  const [name, setName] = useState<string | null>("");
  
  return (
    <input value={name} onChange={e => setName(e.target.value)}/>
  );
};
```

Recommendation is to set the initial type to what the state expects. If that isn't enough, union types can be used.


## 10. useRef and typing dom elements

Type refs by declaring what type of HTML Element they will be attached to. Adding the "!" to the end of "null" declares it as a read-only value (very typical for refs)

```typescript jsx
import React, { useRef, useState } from 'react';

export const Input = () => {
  const [name, setName] = useState('');
  const ref = useRef<HTMLInputElement>(null!);
  
  console.log(ref?.current?.value);
  
  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
  );
};
```

## 11. useReducer Part 1

Typing `useReducer` is no different than previous standard typing. You define types for `Action` & `State` and assign these to the `initialState` and the `reducer` function. Optionally add a `payload` to the action which can be typed as anything previously covered.


```typescript jsx
import React, { useReducer } from 'react';

const initialState: State = {rValue: true};

type State = {
  rValue: boolean
}

type Action = {
  type: string
  // Optionally define a payload of any type (object, boolean, etc.)
  // payload: string
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'one': {
      return {
        rValue: true
      };
    }
    case 'two': {
      return {
        rValue: false
      };
    }
    // Required in order to tell TS what state should be accepted in the default case.
    default: {
      return state;
    }
  }
};

export const ReducerButtons = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({type: 'one'})}>Action One</button>
      <button onClick={() => dispatch({type: 'two'})}>Action Two</button>
      {state?.rValue ? <h1>visible</h1> : 'invisible'}
    </>
  );
};
```

## 12. useReducer Part 2

In order to stop the reducers from accepting bad actions, you can type these as well using `UntionTypes`.

```typescript jsx
type Action = {
  type: 'one' | 'two' // using unionTypes to declare a specific set of allowed actions.
  // Optionally define a payload of any type (object, boolean, etc.)
  // payload: string
}


// Syntax for declaring multiple actions. This can also be used to type which payloads will be accepted.
type ActionExtended =
  | { type: 'one', payload: boolean }
  | { type: 'two' }
  | { type: 'three' }
  | { type: 'four' }
  | { type: 'five' };


```