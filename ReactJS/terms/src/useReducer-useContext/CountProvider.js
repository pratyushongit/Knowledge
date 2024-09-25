import React, { createContext, useContext, useReducer } from "react";

const CountContext = createContext();

export const useCountValue = () => useContext(CountContext);

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return state + 1;
    case "REDUCE_COUNT":
      return state - 1;
    default:
      return state;
  }
};

const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;

// context API is used along with useReducer hook to help centralize the state updation logic & and make state accessible across different components without prop drilling.
