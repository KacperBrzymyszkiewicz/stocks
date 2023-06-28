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
            <h1>Sign in to join</h1>
            <h2>Login and check your portfolio</h2>
            <button className='sin-btn'>Sign in with Google</button>
            <button className='sin-btn'>Sign in with Facebook</button>
            <div id='divide'>
            <hr/><h2>or</h2><hr />
            </div>
            <div className='pole'>
            <p>Username</p>
            <input placeholder='Username' type="text" />
            </div>
            <div className='pole'>
            <p>Email</p>
            <input placeholder='E-mail' type="email" />
            </div>
            <div className='pole'>
            <p>Password</p>
            <input placeholder='Password' type="password" />
            <div id='pass-cont'><p id='pass'>Forgot password?</p></div>
            
            </div>
            
            <button>Sign in</button>
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