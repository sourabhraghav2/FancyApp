import React, {useState,useEffect} from 'react'
import 'components/useraccount/style/createAccountForm.scss';
import Translation from 'language/LanguageModel';
import { MessageProperties } from './landingPage';

interface Props {
  viewModel:Translation,
  createAccountClickHandler
  createAccountMessage:MessageProperties
}
const CreateAccountForm=(props:Props)=>{
  const [username,setUsername] = useState("");
  const [passwordOne,setPasswordOne] = useState("");
  const [passwordTwo,setPasswordTwo] = useState("");
  const [displayMessage,setDisplayMessage] = useState({}as MessageProperties);
  
  useEffect (()=>{
    setDisplayMessage(props.createAccountMessage)
  },[props.createAccountMessage])

  const createAccount =()=>{
    console.log('inside createAccount')
    if(username && passwordOne===passwordTwo  && passwordOne){
      console.log('trigger create')
      props.createAccountClickHandler(username,passwordOne)
    }else {
      setDisplayMessage( {
        message:'Please enter same password!',
        isError:true
      }as MessageProperties)
    }
  }
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