import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusPurple.png";
import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

import ibm from "../images/ibm.png";
import nvidia from "../images/nvidia.png";
import tesla from "../images/tesla.png";
import intel from "../images/intel.png";
import alibaba from "../images/alibaba.png";

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




export default function Robotics(props) {
  const [open, setOpen] = useState(false);

  const [robotics, setRobotics] = useState([]);

  const [IBMStocks, setIBMStocks] = useState([]);


  let cash = props.invest

  const enoughToBuy = (stockPrice) =>{
    // if (stockPrice < cash){
      return <img className="buySell" src={Buy} onClick={() => props.setInvest(parseFloat(cash).toFixed(2) - parseFloat(stockPrice).toFixed(2))} />
    // }
  }
  
  const enoughToSell =(stockPrice)=> {
    // if(// i Own this stock){}
    return(
    <img className="buySell" src={Sell} onClick={() => props.setInvest(parseFloat(cash).toFixed(2) + parseFloat(stockPrice).toFixed(2))}/>
    )
  }



  const filterIBM = () => {
    setIBMStocks(
      robotics.filter(s => {
        if (s.symbol === "IBM") {
          return s;
        }
      })
    );
  };

  const [NVDAStocks, setNVDAStocks] = useState([]);

  const filterNVDA = () => {
    setNVDAStocks(
      robotics.filter(s => {
        if (s.symbol === "NVDA") {
          return s;
        }
      })
    );
  };

  const [TSLAStocks, setTSLAStocks] = useState([]);

  const filterTSLA = () => {
    setTSLAStocks(
      robotics.filter(s => {
        if (s.symbol === "TSLA") {
          return s;
        }
      })
    );
  };

  const [BABAStocks, setBABAStocks] = useState([]);

  const filterBABA = () => {
    setBABAStocks(
      robotics.filter(s => {
        if (s.symbol === "BABA") {
          return s;
        }
      })
    );
  };

  const [INTCStocks, setINTCStocks] = useState([]);

  const filterINTC = () => {
    setINTCStocks(
      robotics.filter(s => {
        if (s.symbol === "INTC") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Robotics");
    setRobotics(data.stocks);
  };
  useEffect(() => {
    filterIBM();
    filterNVDA();
    filterTSLA();
    filterBABA();
    filterINTC();
    // filterPfizer();
  }, [robotics]);

  return (
    <div className={open ? "allStocks click" : "allStocks"}>
       <div className='PlusText'><img
        onClick={() => setOpen(!open)}
        src={Plus}
        className={open ? "Plus click" : "Plus"}
      ></img>
      <h2 className="PlusTitle">Robotics</h2></div>
      <ul style={open ? {display: "flex"}:{display: "none"}}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={ibm} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{IBMStocks[0] && IBMStocks[0].price}</h1>
            </div>
            <div>
            {IBMStocks[0] && enoughToBuy(IBMStocks[0].price)}
              </div>
              <div>
                {IBMStocks[0] && enoughToSell(IBMStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={nvidia} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{NVDAStocks[0] && NVDAStocks[0].price}</h1>
            </div>
            <div>
            {NVDAStocks[0] && enoughToBuy(NVDAStocks[0].price)}
              </div>
              <div>
                {NVDAStocks[0] && enoughToSell(NVDAStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={tesla} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{TSLAStocks[0] && TSLAStocks[0].price}</h1>
            </div>
            <div>
            {TSLAStocks[0] && enoughToBuy(TSLAStocks[0].price)}
              </div>
              <div>
                {TSLAStocks[0] && enoughToSell(TSLAStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={alibaba} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{BABAStocks[0] && BABAStocks[0].price}</h1>
            </div>
            <div>
            {BABAStocks[0] && enoughToBuy(BABAStocks[0].price)}
              </div>
              <div>
                {BABAStocks[0] && enoughToSell(BABAStocks[0].price)}
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={intel} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{INTCStocks[0] && INTCStocks[0].price}</h1>
            </div>
            <div>
            {INTCStocks[0] && enoughToBuy(INTCStocks[0].price)}
              </div>
              <div>
                {INTCStocks[0] && enoughToSell(INTCStocks[0].price)}
            </div>
          </motion.div>
        </div>
      </ul>
    </div>
  );
}
