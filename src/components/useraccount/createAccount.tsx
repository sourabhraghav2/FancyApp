import React, {useState} from 'react'
import 'components/useraccount/style/createAccountForm.scss';
const CreateAccountForm=({createAccountClickHandler})=>{
  const [username,setUsername] = useState("");
  const [passwordOne,setPasswordOne] = useState("");
  const [passwordTwo,setPasswordTwo] = useState("");
  const createAccount =()=>{
    console.log('inside createAccount')
    if(username && passwordOne===passwordTwo  && passwordOne){
      console.log('trigger create')
      createAccountClickHandler(username,passwordOne)
    }
  }
    return (
    <div className="create-account-form">
        <div className="title each-element">Create new account</div>
        <label className="email-label each-element">E-mail</label>
        <input 
          className="input-email each-element" 
          placeholder="user@example.com"
          onChange={event=>{event && setUsername(event.target.value)}}
          />
        <label className="password-label each-element">Password</label>
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
        <button 
          className="login-btn btn active-btn each-element"
          onClick={createAccount}
        >
          Create a new account
        </button >
        
    </div>
    )
  }
  export default CreateAccountForm