import { useEffect, useState } from "react"
function Graph(props){
    const [index,setIndex] = useState(0)
    let coins = props.coins.map(coin=> <div>{coin.item.id}</div>)
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
                
                },5000)
        },[])

    return(
        <div id="graph">
          <div className="graph-pad-big">
              <div className="graph-pad" id="left-top-pad" onClick={()=>setIndex(index+1)}>{coins[index]}</div>
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