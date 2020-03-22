import React from "react";
import Software from "./Software";
import Food from "./Food";
import Health from "./Health";
import Robotics from "./Robotics";
import Banks from "./Banks";

export default function MainMenu(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Software
        stocks={props.stocks}
        invest={props.invest}
        setInvest={props.setInvest}
        setPortfolioStocks={props.setPortfolioStocks}
        portfolioStocks={props.portfolioStocks}
        userPortfolio={props.userPortfolio}
      />
      <Food
        stocks={props.stocks}
        invest={props.invest}
        setInvest={props.setInvest}
        setPortfolioStocks={props.setPortfolioStocks}
        portfolioStocks={props.portfolioStocks}
      />
      <Health
        stocks={props.stocks}
        invest={props.invest}
        setInvest={props.setInvest}
        setPortfolioStocks={props.setPortfolioStocks}
        portfolioStocks={props.portfolioStocks}
      />
      <Robotics
        stocks={props.stocks}
        invest={props.invest}
        setInvest={props.setInvest}
        setPortfolioStocks={props.setPortfolioStocks}
        portfolioStocks={props.portfolioStocks}
      />
      <Banks
        stocks={props.stocks}
        invest={props.invest}
        setInvest={props.setInvest}
        setPortfolioStocks={props.setPortfolioStocks}
        portfolioStocks={props.portfolioStocks}
      />
    </div>
  );
}
