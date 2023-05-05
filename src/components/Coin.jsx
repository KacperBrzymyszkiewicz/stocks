import '../styles/coin.css'
function Coin(props){
    
    return(
        
        <div className="coin-main">
            <div className='coin-first'>
                <div className='coin-rank'><p>Rank #{props.market_cap_rank}</p></div>
                <div className='coin-name'><img src={props.image.small} alt="" />{props.name} {props.symbol}</div>
                <div className='coin-price'>{props.market_data.current_price.usd} USD {props.market_data.price_change_percentage_24h_in_currency.usd}</div>
            </div>

        </div>
        
    )
}
export default Coin