import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Coinline from "./Coinline"
function Graph(props){
    const [index,setIndex] = useState(0)
    const [index1,setIndex1] = useState(1)
    let coins = props.coins.map(coin=> <Link to={`/coin/${coin.item.id}`}><div id="graph-item"> <div className="w100"><img id="obrazek" src={coin.item.small}/></div><p id="nazwaa">{coin.item.id}</p></div></Link>)
        useEffect(()=>{
            setInterval(()=>{
                setIndex1((index1)=>{
                    if(index1<6)
                    {
                    return(index1+1)
                    }
                    else
                    {
                        return(0)
                    }
                    
                    })
                
                },7000)
            setInterval(()=>{
                setIndex((index)=>{
                    if(index<6)
                    {
                    return(index+1)
                    }
                    else
                    {
                        return(0)
                    }
                    
                    })
                
                },7000)

        },[])

    return(
        <div id="graph">
          <div id="left-pad" className="graph-pad-big">
                <div className="graph-pad" id="left-top-pad"></div>
                <div className="graph-pad" id="left-bottom-pad"></div>
          </div>

          <div id="right-pad" className="graph-pad-big">
          <div id="right-pad-container">
                <div className="graph-pad" id="cube-left">{coins[index1]}</div>
                <div className="graph-pad" id="cube-front">{coins[index]}</div>
            </div>
          </div>
          
          <div className="graph-pad-wide">
            <div id="coinline-container">
            <Coinline/>
            </div>
          </div>
        </div>     
    )
}
export default Graph