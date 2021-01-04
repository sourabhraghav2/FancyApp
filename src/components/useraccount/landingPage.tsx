import React , {useState,useEffect} from 'react';
import {connect} from 'react-redux'

import 'components/useraccount/style/landingPage.scss';
import {changeScreenType} from '../../modules/actions'
import Menu from './menu';
import UserLoginForm from './userLoginForm';
import CreateAccountForm from './createAccount';
import ChangeLanguageForm from './changeLanguageForm';
import SecurityModification from './securityModification';
import { LoginService } from 'service/LoginService';
import { LoginRequest, LoginResponse } from 'model/LoginRequest';
import inMemoryJWTManager from 'security/inMemoryJWTManager';
import { ScreenType } from 'common/constants';
import { CreateAccountRequest } from 'model/createAccount';
import { LanguageChangeRequest, LanguageChangeResponse } from 'model/languageModel';
import { ChangePasswordRequest, ChangePasswordResponse } from 'model/changePassword';


const LandingPage =(props)=> {
  const service=new LoginService()
  console.log("inside LandingPage : ",JSON.stringify(props))
  const [menuShow,setMenuShow] = useState(false);
  useEffect(() => {

    if(inMemoryJWTManager.getToken())
      props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
  }, []);

  useEffect(() => {
    console.log ("inside useEffect ")
    if(props.screenType!==ScreenType.LOGIN_FORM && props.screenType!==ScreenType.CREATE_ACCOUNT_FORM)
      setMenuShow(true)
    else 
      setMenuShow(false)
  }, [props.screenType]);

    const leftMenu=()=>{
      return menuShow?
      <Menu 
        genaralMenuClickHandler={genaralMenuClickHandler} 
        securityMenuClickHandler={securityMenuClickHandler} 
        LogoutMenuClickHandler={LogoutMenuClickHandler}
      />:<div></div>
    }

    
  const loginClickHandler= async (username:string,password:string) =>{
    console.log ("inside : loginClickHandler")
    
    const request={username, password} as LoginRequest
    console.log("Request : ",JSON.stringify(request))
    const resp:LoginResponse= await service.attamptLogin(request) 
    if(resp.isSuccess){
      props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
      inMemoryJWTManager.setToken(resp.jwtTokken)
    }  
  }
  const createAccountClickHandler =async(username:string,password:string)=>{
    const request={username, password} as CreateAccountRequest
    console.log("Request : ",JSON.stringify(request))
    const resp:LoginResponse= await service.createAccount(request) 
    if(resp.isSuccess){
      props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
      inMemoryJWTManager.setToken(resp.jwtTokken)
    }else {
      props.changeScreenType(ScreenType.LOGIN_FORM)
    }
  }
  
  const genaralMenuClickHandler=()=>{
    console.log('inside : genaralMenuClickHandler')
    props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
  }
  const securityMenuClickHandler=()=>{
    console.log('inside : securityMenuClickHandler')
    props.changeScreenType(ScreenType.SECURITY_MODIFICATION)
  
  }
  const LogoutMenuClickHandler=async()=>{
    console.log('inside : LogoutMenuClickHandler')
    props.changeScreenType(ScreenType.LOGIN_FORM)
    inMemoryJWTManager.ereaseToken()
    const done=await service.logout() 
    console.log('Response : ',done)
  }
  const displayCreateAccountHandler=()=>{
    console.log ("inside : displayCreateAccountHandler")
    const jwt=inMemoryJWTManager.getToken()
    console.log("Jwt : ",jwt)
    props.changeScreenType(ScreenType.CREATE_ACCOUNT_FORM)
    
  }
  const onSaveClickHandler=async(language:string,privacy:string)=>{
    console.log('inside onSaveClickHandler : ',language," : ",privacy)    
    const request={
      language,privacy
    } as LanguageChangeRequest
    const resp:LanguageChangeResponse= await service.languageChange(request) 
    console.log("resp : ",JSON.stringify(resp))
  }
  const changePasswordHandler =async(username:string,password:string)=>{
    const request={username, password} as ChangePasswordRequest
    console.log("Request : ",JSON.stringify(request))
    const resp:ChangePasswordResponse= await service.changePassword(request) 
    console.log('Response : ',resp.isSuccess)
  }
  
  const deleteAccountHandler =async(username:string,password:string)=>{
    console.log('inside : LogoutMenuClickHandler')
    props.changeScreenType(ScreenType.LOGIN_FORM)
    inMemoryJWTManager.ereaseToken()
    const done=await service.delete() 
    console.log('Response : ',done)
  }
  
  
  
  const containerBody=()=>{
      return (
        <div className="container-body">
          {props.screenType===ScreenType.LOGIN_FORM && 
            <UserLoginForm 
              loginClickHandler={loginClickHandler} 
              displayCreateAccountHandler={displayCreateAccountHandler}
            />
          }
          {props.screenType===ScreenType.CREATE_ACCOUNT_FORM && 
            <CreateAccountForm 
              createAccountClickHandler={createAccountClickHandler} 
            />}
          {props.screenType===ScreenType.CHANGE_LANGUAGE_FORM && 
            <ChangeLanguageForm 
              onSaveClickHandler={onSaveClickHandler}
            />
          }
          {props.screenType===ScreenType.SECURITY_MODIFICATION && 
            <SecurityModification  
              deleteAccountHandler={deleteAccountHandler} 
              changePasswordHandler={changePasswordHandler} 
            />
          }
        </div>
      )
    }
	return (
    <div className="landingPage">
       {leftMenu()}
      {containerBody()}
    </div>
	)
}

function mapStateToProps(state) {
  console.log ("inside mapStateToProps: ",JSON.stringify(state))
    return {
      screenType: state.userStore.screenType
    };
  }

  export default connect((mapStateToProps),{
      changeScreenType,
  })(LandingPage);