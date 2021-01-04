import React, {useState} from 'react'
import 'components/useraccount/style/userLoginForm.scss';
const UserLoginForm=({loginClickHandler,displayCreateAccountHandler})=>{
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const loginClick =()=>{
    if(username && password)
      loginClickHandler(username,password)
  }
  return (
      <div className="user-login-form">
          <div className="title each-element">Fancy App</div>
          <label className="email-label each-element">E-mail</label>
          <input required 
            className="input-email each-element" 
            placeholder="user@example.com" 
            onChange={event=>{event && setUsername(event.target.value)}}
          />
          <label className="password-label each-element" >Password</label>
          <input required 
            className="input-password each-element"
            type="password" 
            placeholder="*********" 
            onChange={event=>{event && setPassword(event.target.value)}}
          />
          <button className="login-btn btn active-btn each-element" onClick={loginClick}>
            Log in
          </button>
          <button className="new-account-btn btn each-element" onClick={displayCreateAccountHandler}>
            Create a new account
          </button>
      </div>
    )
  }
  export default UserLoginForm