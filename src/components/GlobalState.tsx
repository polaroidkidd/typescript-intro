import { createContext } from 'react';

type InitialValues = {
  rValue: boolean
}

export const initialValues: InitialValues = {
  rValue: true
};

export const GlobalContext = createContext(initialValues);