import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

//return updated or old state
import cartItems from "./cart-items";
// redux stuff

//store-stores data, think of state
//reducer-function that used to update store
import { createStore } from 'redux'

//dispatch method-send actions to the store
//actions (objects)-Must have type property- what kind of action
//don't mutate the state - redux built on immutability

//store.getState()-returns the updated state


//initial store
const initialStore = {
  count: 88
}


//reducer
function reducer(state, action) {

  console.log({ state }, { action })

  if (action.type === 'DECREASE') {

    //state.count = state.count - 1 -------->WRONG, you are mutating!!!

    return { ...state, count: state.count - 1 }
  }
  return state
}


const store = createStore(reducer, initialStore)

store.dispatch({ type: 'DECREASE' })

console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
