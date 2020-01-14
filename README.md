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

```TypeScript
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

```React
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

```React
import React from 'react';


type Props = {
  title: string,
  isActive?: boolean // optional
}

// isActive is now optional and therefor needs a default argument in case this isn't provided.
export const Header: React.FC<Props> = ({title, isActive= true}) => {

[...]

```