import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Navbar(props) {
    return(
        <nav>
            <div id="logo"></div>
            <div id="menu">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Categories'>Cryptocurrencies</Link>
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
            <div id="menu-left">
            <div onClick={()=>{
                document.getElementById('search-bar-container').style.flexBasis = "260px";
                document.getElementById("search-bar").focus()
            }} id="search-bar-container">
                <div id="search-icon-container"><FontAwesomeIcon id="s-icon" icon={faMagnifyingGlass} /></div>
            
            <input onBlur={()=>{document.getElementById('search-bar-container').style.flexBasis='60px'}} type="search" name="" placeholder="Search" id="search-bar" />
            </div>
            
            <div id="sign-btn">
                
                <div onClick={props.modal}>
                    Sign in
                </div>
                
            </div>
            </div>
        </nav>
        
    )
    
}
export default Navbar