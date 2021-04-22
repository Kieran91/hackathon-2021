import React, { useReducer, useState } from 'react';
import axios from "axios"
import Bonds from "./components/Bonds";
import Counterparties from "./components/Counterparties";
import Trades from "./components/Trades";

function App() {
  return (
    <div>
  <Trades />
  {/* <Bonds />
  <Counterparties /> */}
  </div>
  )
}

export default App;