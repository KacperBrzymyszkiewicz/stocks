import React, { useEffect, useState,useMemo } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Board from "../components/Board"
import Graph from "../components/Graph"
import Loginform from "../components/Loginform"
import '../styles/App.css'
function App(props) {
  const [data,setData] = useState([])
  const [trend,setTrend] = useState([])
  const [login,setlogin] = useState(false)
  function useFetchAPI(url)
  {
    fetch(url)
    .then(res =>res.json())
    .then(data=>{setData(Object.values(data))})
  }
  function useFetchAPIT(url)
  {
    fetch(url)
    .then(res =>res.json())
    .then(data=>{setTrend(Object.values(data.coins))})
  }
  function modal(){
    if(login == false)
    {
      setlogin(true)
    }
    else{
      setlogin(false)
    }
  }
  useEffect(() => {
    useFetchAPI('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    useFetchAPIT('https://api.coingecko.com/api/v3/search/trending')
  },[]);


 console.log(data)
 console.log(trend)
  return (
    <>
    <Navbar modal = {modal}/>
    <Loginform modal = {modal} login={login}/>
    <div id="main-container">
      <div id="main-first-container">
        <div id="main-text">
            <h1>Keep track of your portfolio value with us!</h1>
            <h2>We have been analyzing the stock market for over 25 years to keep you update on new strageties and information. Look for what interests you.</h2>
            <div>            
              <input onMouseLeave={()=>{}} type="search" name="" id="" placeholder="Search" />
              <p id="slogan">over 2500 stocks</p></div>
            </div>
        <Graph linecoins = {data} coins = {trend}/>
      </div>
      <div id="main-second-container">
        <Board coins = {data}/>

      </div>
    </div>
    </>
  )
}

export default App
