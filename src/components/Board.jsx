import React from "react"
import useFetchAPI from "../hooks/useFetchAPI"
function Board(){
    const data = useFetchAPI('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    return(
        <>
        </>
    )

}
export default Board