import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusYellow.png";
import cocacola from "../images/cocacola.png";
import pepsi from "../images/pepsi.png";
import mcd from "../images/mcd.png";
import bkc from "../images/burgerking.png";
import starbucks from "../images/starbucks.png";

import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

import { getStocksByType } from "../api-helper";

const vars = {
  shown: {
    opacity: 1,
    x: '27%'
  },
  hidden: {
    opacity: 0,
    x: 0
  }
};

export default function Food(props) {


  let cash = props.cashToInvest


  const [open, setOpen] = useState(false);

  const [food, setFood] = useState([]);

  const [KOStocks, setKOStocks] = useState([]);

  const filterKO = () => {
    setKOStocks(
      food.filter(s => {
        if (s.symbol === "KO") {
          return s;
        }
      })
    );
  };

  const [PepStocks, setPepStocks] = useState([]);

  const filterPep = () => {
    setPepStocks(
      food.filter(s => {
        if (s.symbol === "PEP") {
          return s;
        }
      })
    );
  };

  const [McdStocks, setMcdStocks] = useState([]);

  const filterMcd = () => {
    setMcdStocks(
      food.filter(s => {
        if (s.symbol === "MCD") {
          return s;
        }
      })
    );
  };

  const [BKCStocks, setBKCStocks] = useState([]);

  const filterBKC = () => {
    setBKCStocks(
      food.filter(s => {
        if (s.symbol === "BKC") {
          return s;
        }
      })
    );
  };

  const [SBUXStocks, setSBUXStocks] = useState([]);

  const filterSBUX = () => {
    setSBUXStocks(
      food.filter(s => {
        if (s.symbol === "SBUX") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Food");
    setFood(data.stocks);
  };
  useEffect(() => {
    filterKO();
    filterPep();
    filterMcd()
    filterBKC()
    filterSBUX()
    // filterGoogle();
    // filterFace();
    // filterMicro()
    // filterAmzn()
  }, [food]);


  const enoughToBuy = (stockPrice) =>{
    // if (stockPrice < cash){
      return <img className="buySell" src={Buy} onClick={() => props.setCashToInvest(parseFloat(cash).toFixed(2) - parseFloat(stockPrice).toFixed(2))} />
    // }
  }

  const enoughToSell =(stockPrice)=> {
    // if(// i Own this stock){}
    return(
    <img className="buySell" src={Sell} onClick={() => props.setCashToInvest(parseFloat(cash).toFixed(2) + parseFloat(stockPrice).toFixed(2))}/>
    )
  }


  return (
    <div className={open ? "allStocks click" : "allStocks"}>
     <div className='PlusText'>
      <img
        onClick={() => setOpen(!open)}
        src={Plus}
        className={open ? "Plus click" : "Plus"}
      ></img>
      <h2 className="PlusTitle">Food</h2></div>
      <ul style={open ? {display: "flex"}:{display: "none"}}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={cocacola} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{KOStocks[0] && KOStocks[0].price}</h1>
            </div>
            <div>
                {KOStocks[0] && enoughToBuy(KOStocks[0].price)}
              </div>
              <div>
                {KOStocks[0] && enoughToSell(KOStocks[0].price)}
              </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={pepsi} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{PepStocks[0] && PepStocks[0].price}</h1>
            </div>
            <div>
                {PepStocks[0] && enoughToBuy(PepStocks[0].price)}
              </div>
              <div>
                {PepStocks[0] && enoughToSell(PepStocks[0].price)}
              </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={mcd} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{McdStocks[0] && McdStocks[0].price}</h1>
            </div>
            <div>
            {McdStocks[0] && enoughToBuy(McdStocks[0].price)}
              </div>
              <div>
                {McdStocks[0] && enoughToSell(McdStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={bkc} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{BKCStocks[0] && BKCStocks[0].price}</h1>
            </div>
            <div>
            {BKCStocks[0] && enoughToBuy(BKCStocks[0].price)}
              </div>
              <div>
                {BKCStocks[0] && enoughToSell(BKCStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={starbucks} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{SBUXStocks[0] && SBUXStocks[0].price}</h1>
            </div>
            <div>
            {SBUXStocks[0] && enoughToBuy(SBUXStocks[0].price)}
              </div>
              <div>
                {SBUXStocks[0] && enoughToSell(SBUXStocks[0].price)}
            </div>
          </motion.div>
        </div>
      </ul>
    </div>
  );
}
