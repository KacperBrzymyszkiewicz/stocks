import React from 'react'
import  ReactDOM  from 'react-dom'
import '../styles/login.css'
function Loginform(props){
    if(props.login == true){
    return ReactDOM.createPortal(
        <>
        <div id='back' onClick={props.modal}></div>
        <div id='loginform'>
            <div id='form'>
            <div id='marg'>
            <div className='pole'>
            <p>Username</p>
            <input type="text" />
            </div>
            <div className='pole'>
            <p>Email</p>
            <input type="email" />
            </div>
            <div className='pole'>
            <p>Password</p>
            <input type="password" />
            </div>
            </div>
            </div>
        </div>
        
        </>,
        document.getElementById('portal')
    )}
    else
    {
        return(
            <>
            </>
        )
    }

}
export default Loginform