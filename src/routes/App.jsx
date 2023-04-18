import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import '../styles/App.css'

function App(props) {
  const [BTC,setBTC] = useState("")
  function fetchAPI(api)
  {
    fetch(api)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchAPI('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1')
  },[]);
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
        <div id="">

        </div>


      </div>
    </div>
    </>
  )
}

export default App
