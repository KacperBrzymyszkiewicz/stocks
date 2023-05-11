import { Link } from 'react-router-dom'
import '../styles/coin.css'
import TradingViewWidget from './TradingViewWidget'
import { useState,useEffect,useRef } from 'react'
function Coin(props){
    
    let color = ''
    if((String(props.market_data.price_change_percentage_24h_in_currency.usd).includes('-')))
    {
        color = 'red'
    }
    else
    {
        color = 'green'
    }
    
    return(
        
        <div className="coin-main">
            <div className='coin-first'>
                <div className='coin-rank'><p>Rank #{props.market_cap_rank}</p><Link to={'/'}>Return</Link></div>
                <div className='coin-name'><img src={props.image.small} alt="" />{props.name} {props.symbol.toUpperCase()}</div>
                <div className='coin-price'>{props.market_data.current_price.usd} USD <p className={`percentage-change ${color}`}>{props.market_data.price_change_percentage_24h_in_currency.usd}%</p></div>
                <div className='coin-second'>
                <div className='coin-list-container'>
                                       
                    <ul className='coin-list'>
                        <li>Market cap: ${props.market_data.market_cap.usd}</li>
                        <li>Circulating supply: {props.market_data.circulating_supply} {props.symbol.toUpperCase()}</li>
                        <li id='max-supply'>Max supply: {props.market_data.max_supply ? props.market_data.max_supply : "Unlimited"} {props.symbol.toUpperCase()}</li>
                    </ul>
                    
                    
                    <ul className='coin-list'>
                        <li>All time high: ${props.market_data.ath.usd}</li>
                        <li>Change from all time high: {props.market_data.ath_change_percentage.usd}%</li>
                        <li>{props.genesis_date ?  "Creation Date: " + props.genesis_date: "Liquidity score: " + props.liquidity_score } </li>
                    </ul>
                   

                </div>
            </div>
                <div className='coin-chart'>
                    <TradingViewWidget symbol = {props.symbol.toUpperCase()&& props.symbol}/>
                </div>
            </div>
            
            
        </div>
        
    )

}
export default Coin