import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusGreen.png";
import apple from "../images/apple.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import microsoft from "../images/microsoft.png";
import amazon from "../images/amazon.png";

import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

import { getStocksByType, BuyStock, IOwnStock } from "../api-helper";

const vars = {
  shown: {
    opacity: 1,
    x: "27%"
  },
  hidden: {
    opacity: 0,
    x: 0
  }
};

export default function Software(props) {
  console.log(props)
  let cash = props.invest;
  

  const [open, setOpen] = useState(false);

  const [software, setSoftware] = useState([]);

  const [appleStocks, setAppleStocks] = useState([]);

  const filterApple = () => {
    setAppleStocks(
      software.filter(s => {
        if (s.symbol === "AAPL") {
          return s;
        }
      })
    );
  };

  const [googleStocks, setGoogleStocks] = useState([]);

  const filterGoogle = () => {
    setGoogleStocks(
      software.filter(s => {
        if (s.symbol === "GOOG") {
          return s;
        }
      })
    );
  };

  const [faceStocks, setFaceStocks] = useState([]);

  const filterFace = () => {
    setFaceStocks(
      software.filter(s => {
        if (s.symbol === "FB") {
          return s;
        }
      })
    );
  };

  const [microStocks, setMicroStocks] = useState([]);

  const filterMicro = () => {
    setMicroStocks(
      software.filter(s => {
        if (s.symbol === "MSFT") {
          return s;
        }
      })
    );
  };

  const [amznStocks, setAmznStocks] = useState([]);

  const filterAmzn = () => {
    setAmznStocks(
      software.filter(s => {
        if (s.symbol === "AMZN") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Software");
    setSoftware(data.stocks);
  };
  useEffect(() => {
    filterApple();
    filterGoogle();
    filterFace();
    filterMicro();
    filterAmzn();
  }, [software]);

  const buyStock = async (stockPrice, symbol) => {




    stockPrice = parseFloat(stockPrice).toFixed(2);
    let myStocks = parseFloat(props.portfolioStocks + stockPrice).toFixed(2);
    console.log();
    props.setPortfolioStocks(myStocks);
    cash = parseFloat(cash).toFixed(2);
    console.log(stockPrice, cash);
    let result = parseFloat(cash - stockPrice).toFixed(2);
    props.setInvest(result);

    let res = await BuyStock(symbol)
    console.log(res)
    window.location.reload(false)

  };
  console.log(props);


  const enoughToBuy = (stockPrice, symbol) => {
    
    if (stockPrice < props.userPortfolio.cash_to_spare) {
      return (
        <img
          className="buySell"
          src={Buy}
          onClick={() => buyStock(stockPrice, symbol)}
        />
      );
    }
  };

  const enoughToSell =() => {

      return <img className="buySell" src={Sell} />
  
  };

  return (
    <div className={open ? "allStocks click" : "allStocks"}>
      <div className="PlusText">
        <img
          onClick={() => setOpen(!open)}
          src={Plus}
          className={open ? "Plus click" : "Plus"}
        ></img>
        <h2 className="PlusTitle">Software</h2>
      </div>
      <ul style={open ? { display: "flex" } : { display: "none" }}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <div>
                <img src={apple} className="logos"></img>
              </div>
              <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
                <h1>{appleStocks[0] && appleStocks[0].price}</h1>
              </div>
              <div>
                {appleStocks[0] &&
                  enoughToBuy(appleStocks[0].price, appleStocks[0].symbol)}
              </div>
              <div>{appleStocks[0] && enoughToSell(appleStocks[0].price)}</div>
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={google} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{googleStocks[0] && googleStocks[0].price}</h1>
            </div>
            <div>
              {googleStocks[0] &&
                enoughToBuy(googleStocks[0].price, googleStocks[0].symbol)}
            </div>
            <div>{googleStocks[0] && enoughToSell(googleStocks[0].price)}</div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={facebook} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{faceStocks[0] && faceStocks[0].price}</h1>
            </div>
            <div>
            {faceStocks[0] &&
                  enoughToBuy(faceStocks[0].price, faceStocks[0].symbol)}
            </div>
            <div>{faceStocks[0] && enoughToSell(faceStocks[0].price)}</div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={microsoft} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{microStocks[0] && microStocks[0].price}</h1>
            </div>
            {microStocks[0] &&
                  enoughToBuy(microStocks[0].price, microStocks[0].symbol)}
            <div>{microStocks[0] && enoughToSell(microStocks[0].price)}</div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={amazon} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{amznStocks[0] && amznStocks[0].price}</h1>
            </div>
            {amznStocks[0] &&
                  enoughToBuy(amznStocks[0].price, amznStocks[0].symbol)}
            <div>{amznStocks[0] && enoughToSell(amznStocks[0].price)}</div>
          </motion.div>
        </div>
      </ul>
    </div>
  );
}
