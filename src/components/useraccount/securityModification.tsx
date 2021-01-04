import React, {useState} from 'react'
import 'components/useraccount/style/securityModification.scss';


const ChangePassword= ({changePasswordHandler})=>{
  const [username,setUsername] = useState("");
  const [passwordOne,setPasswordOne] = useState("");
  const [passwordTwo,setPasswordTwo] = useState("");
  const saveChange =()=>{
    console.log('inside createAccount')
    if(username && passwordOne===passwordTwo  && passwordOne){
      console.log('trigger create')
      changePasswordHandler(username,passwordOne)
    }
  }
  return (
      <div className="change-password">
        <label className="email-label each-element">Old password</label>
        <input 
          className="input-email each-element" 
          placeholder="user@example.com"
          onChange={event=>{event && setUsername(event.target.value)}}
        />
        <label className="password-label each-element">New  password</label>
        <input 
          className="input-password each-element"
          type="password" 
          placeholder="*********"
          onChange={event=>{event && setPasswordOne(event.target.value)}}
        />
        <input 
          className="input-password each-element"
          type="password" 
          placeholder="*********"
          onChange={event=>{event && setPasswordTwo(event.target.value)}}
        />
        <button className="new-account-btn active-btn btn each-element" onClick={saveChange}>
          Save changes
        </button>
    </div>)
}
const DeleteAccount=({deleteAccountHandler})=>{
  return (
    <div className="delete-account">
      <label className="email-label each-element">Once the account deletion process begins, you won't be able  to access your account or retrieve any of your setting you have changed.</label>
      <button className="login-btn btn active-btn each-element" onClick={deleteAccountHandler}>
        Delete this account
      </button>
    </div>
  )
}
const SecurityModification=({deleteAccountHandler,changePasswordHandler})=>{
    return (
    <div className="security-modification">
      <ChangePassword changePasswordHandler={changePasswordHandler}/>
      <DeleteAccount deleteAccountHandler={deleteAccountHandler}/>
    </div>
    )
  }
  export default SecurityModification