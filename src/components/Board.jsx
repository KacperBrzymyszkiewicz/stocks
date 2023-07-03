import { Link } from "react-router-dom"
function Board(props){
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
return(
    <>
    <ul>
        <li id="titles" className="crypto-li">
          <div className="rank" ></div>
          <div className="image" ><p>Coin</p></div>
          <div>Current Price $</div>
          <div>Market Cap $</div>
          <div>24h Change %</div>
          <div>Daily Range $</div>
        </li>
        <hr />
        {props.coins.map((coin)=><li className="crypto-li">
          <div className="rank">{coin.market_cap_rank}</div>
          <div className="image"><img src={coin.image} alt="" /><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div>
           <div>{USDollar.format(coin.current_price)}</div>
            <div>{USDollar.format(coin.market_cap)}</div>
             <div>{coin.price_change_percentage_24h}%</div>
             <div>{coin.low_24h}$ - {coin.high_24h}$</div>
             </li>)}
      </ul>
    </>
)
}
export default Board