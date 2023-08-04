import React from "react";
function Coinline(props)
{
    return(
        <div id="Coinline">
            <ul className="linecoin-list">
                <div className="linecoin">{props.linecoins[92]}</div>
                <div className="linecoin">{props.linecoins[93]}</div>
                <div className="linecoin">{props.linecoins[94]}</div>
                <div className="linecoin">{props.linecoins[95]}</div>

            </ul>
            <ul className="linecoin-list">
                <div className="linecoin">{props.linecoins[96]}</div>
                <div className="linecoin">{props.linecoins[97]}</div>
                <div className="linecoin">{props.linecoins[98]}</div>
                <div className="linecoin">{props.linecoins[99]}</div>

            </ul>
        </div>
    )
}
export default Coinline