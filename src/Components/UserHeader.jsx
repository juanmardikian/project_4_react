import React, { useState, useEffect } from "react";
import Profile from "../images/profile.png";
import {AddCash} from '../api-helper'

export default function UserHeader({invest, investFormOpen, handleInvestChange, setInvestFormOpen, portfolioStocks, userPortfolio }) {
  

 let totalCash_to_spare = (userPortfolio.cash_to_spare && userPortfolio.cash_to_spare) +  (invest)
 let amount_invested = userPortfolio.money_invested




const handleSubmit = async(e) => {
  e.preventDefault()
  let res = AddCash(totalCash_to_spare)

}



  return (
    <div className="userHeader" style={{ backgroundColor: "purple" }}>
      <div className="UserProfile">
        <img src={Profile} className="UserPic" />
      </div>
      <div className="imputInvest">
        {investFormOpen && <form onSubmit= {handleSubmit}><input
          onChange={handleInvestChange}
          style={{ margin: "10px", width: "50vw" }}
          className="logIn"
          placeholder="Amount you want to invest"
          value={invest}

        /></form>}
        {/* <h1>{invest}</h1> */}
        <h1>Cash to Spare ${ totalCash_to_spare}</h1>
        {/* <h1>{parseFloat(portfolioStocks).toFixed(2)}</h1> */}
        <h1>Amount Invested ${amount_invested}</h1>
      </div>
     
    </div>
  );
}
