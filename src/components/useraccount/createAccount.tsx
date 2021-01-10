import React, {useState,useEffect} from 'react'
import 'components/useraccount/style/createAccountForm.scss';
import Translation from 'language/LanguageModel';
import { MessageProperties } from './landingPage';
import { emailValidationPattern, INVALID_EMAIL,PASSWORD_NOT_SAME ,EMPTY} from 'common/constants';

interface Props {
  viewModel:Translation,
  createAccountClickHandler
  createAccountMessage:MessageProperties
}
const CreateAccountForm=(props:Props)=>{
  const [username,setUsername] = useState(EMPTY);
  const [passwordOne,setPasswordOne] = useState(EMPTY);
  const [passwordTwo,setPasswordTwo] = useState(EMPTY);
  const [displayMessage,setDisplayMessage] = useState({}as MessageProperties);
  
  useEffect (()=>{
    setDisplayMessage(props.createAccountMessage)
  },[props.createAccountMessage])

  const createAccount =()=>{
    if(username && passwordOne===passwordTwo  && passwordOne && emailValidationPattern.test(username)){
      props.createAccountClickHandler(username,passwordOne)
    }else {
      if(emailValidationPattern.test(username)){
        setDisplayMessage( {
          message:INVALID_EMAIL,
          isError:true
        }as MessageProperties)
      }else 
      setDisplayMessage( {
        message:PASSWORD_NOT_SAME,
        isError:true
      }as MessageProperties)
    }
  }
  useEffect(()=>{
    
    if(!emailValidationPattern.test(username)){
      setDisplayMessage( {
        message:INVALID_EMAIL,
        isError:true
      }as MessageProperties)  
    }else {
      setDisplayMessage( {
        isError:false
      }as MessageProperties)
    }
    
  },[username])
    return (
    <div className="create-account-form">
        <div className="title each-element">{props.viewModel.CREATE_NEW_ACCOUNT}</div>
        <label className="email-label each-element">{props.viewModel.EMAIL}</label>
        <input 
          className="input-email each-element" 
          placeholder="user@example.com"
          onChange={event=>{event && setUsername(event.target.value)}}
          />
        <label className="password-label each-element">{props.viewModel.PASSWORD}</label>
        <input 
          className="input-password first-password each-element"
          type="password" 
          placeholder="*********"
          onChange={event=>{event && setPasswordOne(event.target.value)}}
        />
        <input 
          className="input-password second-password each-element"
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
        <button 
          className="login-btn btn active-btn each-element"
          onClick={createAccount}
        >
          {props.viewModel.CREATE_A_NEW_ACCOUNT}
        </button >
        
    </div>
    )
  }
  export default CreateAccountForm