import React from "react";
function Coinline(props)
{
    return(
        <div id="Coinline">
            <ul className="linecoin-list">
                <div className="linecoin">{props.linecoins[0]}</div>
                <div className="linecoin">{props.linecoins[1]}</div>
                <div className="linecoin">{props.linecoins[2]}</div>
                <div className="linecoin">{props.linecoins[3]}</div>

            </ul>
            <ul className="linecoin-list">
                <div className="linecoin">{props.linecoins[4]}</div>
                <div className="linecoin">{props.linecoins[5]}</div>
                <div className="linecoin">{props.linecoins[6]}</div>
                <div className="linecoin">{props.linecoins[7]}</div>

            </ul>
        </div>
    )
}
export default Coinline