import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import useFetchAPI from "../hooks/useFetchAPI"
import '../styles/App.css'
import Board from "../components/Board"
function App(props) {
const {loading,error,data} = useFetchAPI('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
 if(loading) return('loading')
 
 console.log(data)
  return (
    <>
    <Navbar/>
    <div id="main-container">
      <div id="main-first-container">
        <div id="main-text">
            <h1>Keep track of your portfolio value with us!</h1>
            <h2>We have been analyzing the stock market for over 25 years to keep you update on new strageties and information. Look for what interests you.</h2>
            <div>            
              <input type="search" name="" id="" placeholder="Search" />
              <p>over 2500 stocks</p></div>
            </div>
        <div id="graph">
          <div className="graph-pad-big">
              <div className="graph-pad" id="left-top-pad"></div>
              <div className="graph-pad" id="left-bottom-pad"></div>
          </div>

          <div id="right-pad" className="graph-pad-big">
            <p>Learn more about crypto</p>
          </div>
          <div className="graph-pad-wide">
            
          </div>
        </div>
      </div>
      <div id="main-second-container">

      <Board/>

      </div>
    </div>
    </>
  )
}

export default App
