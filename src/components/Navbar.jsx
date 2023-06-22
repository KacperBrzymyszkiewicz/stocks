import { Link } from "react-router-dom"
import '../styles/Navbar.css'
function Navbar(props) {
    return(
        <nav>
            <div id="logo"></div>
            <div id="menu">
            <ul>
                <li>
                    <Link to='/profile'>Trade</Link>
                </li>
                <li>
                    <Link>Cryptocurrencies</Link>
                </li>
                <li>
                    <Link>Stocks</Link>
                </li>
                <li>
                    <Link>CFD</Link>
                </li>
                <li>
                    <Link>Forex</Link>
                </li>
                <li>
                    <Link>Index</Link>
                </li>
            </ul>
            </div>
            <div id="sign-btn">
                <div onClick={props.modal}>
                    Sign in
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar