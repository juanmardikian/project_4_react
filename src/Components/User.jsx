import React from "react";
import UserHeader from "./UserHeader";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";

export default function User(props) {
  if (localStorage.getItem("authToken")) {
    return (
      <div>
        <UserHeader
          invest={props.invest}
          investFormOpen={props.investFormOpen}
          handleInvestChange={props.handleInvestChange}
          setInvestFormOpen={props.setInvestFormOpen}
          portfolioStocks={props.portfolioStocks}
          userPortfolio={props.userPortfolio}
        />
        <MainMenu
          stocks={props.stocks}
          invest={props.invest}
          setInvest={props.setInvest}
          setPortfolioStocks={props.setPortfolioStocks}
          portfolioStocks={props.portfolioStocks}
          userPortfolio={props.userPortfolio}
        />
        <Footer />
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}
