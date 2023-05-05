import Navbar from "../components/Navbar"
import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import Coin from "../components/Coin"
import { useParams } from "react-router-dom"
function Coinpage(props){
    const [coinData,setCoinData] = useState()
    let {coinId} = useParams()
    function useFetchAPI(url)
  {
    fetch(url)
    .then(res =>res.json())
    .then(data=>{setCoinData(data)})
  }
  useEffect(() => {
    useFetchAPI(`https://api.coingecko.com/api/v3/coins/${coinId}`)
   
  },[]);
  console.log(coinData)
    return(
        <>
        <Navbar/>
        <Coin {...coinData}/>
        </>
    )
}
export default Coinpage