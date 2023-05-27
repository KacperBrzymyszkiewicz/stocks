import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Graph(props){
    const [index,setIndex] = useState(0)
    let coins = props.coins.map(coin=> <Link to={`/coin/${coin.item.id}`}><div id="graph-item"> <div className="w100"><img src={coin.item.small}/></div><p>{coin.item.id}</p></div></Link>)
        useEffect(()=>{
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
          <div className="graph-pad-big">
              <div className="graph-pad" id="left-top-pad">{coins[index]}</div>
              <div className="graph-pad" id="left-bottom-pad"></div>
          </div>

          <div id="right-pad" className="graph-pad-big">
            <p>Learn more about crypto</p>
          </div>
          <div className="graph-pad-wide">
            
          </div>
        </div>     
    )
}
export default Graph