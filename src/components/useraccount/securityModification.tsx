import React, {useState,useEffect} from 'react'
import 'components/useraccount/style/securityModification.scss';
import Translation from 'language/LanguageModel';
import { MessageProperties } from './landingPage';
import { EMPTY, PASSWORD_NOT_SAME } from 'common/constants';


interface ChangePasswordProp{
  changePasswordHandler,
  displayMessage:MessageProperties,
  viewModel:Translation
}

interface SecurityModificationProp {
  deleteAccountHandler,
  changePasswordHandler,
  changePasswordMessage:MessageProperties,
  viewModel:Translation
}

const ChangePassword= (props: ChangePasswordProp)=>{
  const [username,setUsername] = useState(EMPTY);
  const [passwordOne,setPasswordOne] = useState(EMPTY);
  const [passwordTwo,setPasswordTwo] = useState(EMPTY);
  const [displayMessage,setDisplayMessage] = useState({}as MessageProperties);
  
  useEffect (()=>{
    setDisplayMessage(props.displayMessage)
  },[props.displayMessage])
  const saveChange =()=>{
    if(username && passwordOne===passwordTwo  && passwordOne){
      props.changePasswordHandler(username,passwordOne)
    }else {
      setDisplayMessage(
        {
          message:PASSWORD_NOT_SAME,
          isError:true
        }as MessageProperties
      )
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
        {displayMessage &&     
          <div className="errorOrSuccess">
            {displayMessage.isError ?
              <div className="error-message">
                  {displayMessage.message}
              </div>:
              <div className="success-message">
                  {displayMessage.message}  
              </div>
          }
          </div>
        }
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

const SecurityModification=(props:SecurityModificationProp)=>{
    return (
    <div className="security-modification">
      <ChangePassword changePasswordHandler={props.changePasswordHandler} viewModel={props.viewModel} displayMessage={props.changePasswordMessage}/>
      <DeleteAccount deleteAccountHandler={props.deleteAccountHandler}/>
    </div>
    )
  }
  export default SecurityModification