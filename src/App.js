import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import {getPortfolio} from './api-helper'



import Welcome from "./Components/Welcome";
import SignUp from "./Components/SignUp";
import User from "./Components/User";

function App() {
  const [users, setUsers] = useState([]);
  const [userPortfolio, setUserPortfolio] = useState({})
  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState(0.00)

  const [invest, setInvest] = useState("");
  const [investFormOpen, setInvestFormOpen] = useState(true);

  const handleInvestChange = e => {
    if(e.target){
      setInvest(parseFloat(e.target.value));
    }
  };

  console.log(portfolioStocks)

  // First thing, the axios

  useEffect(() => {
    getUserPortfolio()
    
    
  }, []);


const getUserPortfolio = async () => {
  if(localStorage.getItem('authToken')){
    let res = await getPortfolio()
    console.log(res)
    setUserPortfolio(res)
     }
}

console.log(userPortfolio)
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/SignUp">
        <SignUp />
      </Route>
      <Route exact path="/User">
        <User userPortfolio={userPortfolio} stocks={stocks} invest={invest} investFormOpen={investFormOpen} handleInvestChange={handleInvestChange} setInvestFormOpen={setInvestFormOpen} setInvest={setInvest} portfolioStocks={portfolioStocks} setPortfolioStocks={setPortfolioStocks}/>
      </Route>
    </div>
  );
}

export default App;
