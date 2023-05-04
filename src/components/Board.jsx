import { Link } from "react-router-dom"
function Board(props){
return(
    <>
    <ul>
        <li id="titles" className="crypto-li"><div className="rank" ></div><div className="image" ><p>Coin</p></div><div>Current price $</div><div>Market cap $</div><div>24h Change %</div></li>
        <hr />
        {props.coins.map((coin)=><li className="crypto-li"><div className="rank">{coin.market_cap_rank}</div><div className="image"><img src={coin.image} alt="" /><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div> <div>${(coin.current_price)}</div> <div>${coin.market_cap}</div> <div>{coin.price_change_percentage_24h}%</div></li>)}
      </ul>
    </>
)
}
export default Board