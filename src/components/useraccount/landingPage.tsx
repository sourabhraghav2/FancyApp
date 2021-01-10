import React , {useState,useEffect} from 'react';
import {connect} from 'react-redux'

import 'components/useraccount/style/landingPage.scss';
import {changeScreenType} from '../../modules/actions'
import Menu from './menu';
import UserLoginForm from './userLoginForm';
import CreateAccountForm from './createAccount';
import ChangeLanguageForm from './changeLanguageForm';
import SecurityModification from './securityModification';
import { Service } from 'service/Service';
import { LoginRequest, LoginResponse } from 'model/LoginRequest';
import inMemoryJWTManager from 'security/inMemoryJWTManager';
import { EMPTY, LOGIN_FAILED, Privacy, ScreenType } from 'common/constants';
import { Language } from 'common/constants';


import { CreateAccountRequest, CreateAccountResponse } from 'model/createAccount';
import { LanguageChangeRequest, LanguageChangeResponse } from 'model/languageModel';
import { ChangePasswordRequest, ChangePasswordResponse } from 'model/changePassword';
import Translation from 'language/LanguageModel';


export interface MessageProperties{
  message?:string,
  isError?:boolean
}

const LandingPage =(props)=> {
  const service=new Service()
  const millisecondsToWait = 500;
  const [menuShow,setMenuShow] = useState(false);
  const [loginFormButtonLoading,setLoginFormButtonLoading] = useState(false);
  const [loginMessage,setLoginMessage] = useState(EMPTY);
  const [viewModel,setViewModel]=useState(new Translation())

  const [changePasswordMessage,setChangePasswordMessage]=useState({} as MessageProperties)
  const [changeLanguageMessage,setChangeLanguageMessage]=useState({} as MessageProperties)
  const [createAccountMessage,setCreateAccountMessage]=useState({} as MessageProperties)

  const [language,setLanguage]=useState(Language.ENGLISH.toString())
  const [privacy,setPrivacy]=useState( Privacy.PRIVATE.toString())
  const [username,setUserName]=useState(EMPTY)

  
  useEffect(() => {

    if(inMemoryJWTManager.getToken())
      props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
    loadLanguage(language)
    
  }, []);

  const loadLanguage =async (language:string )=>{
    setViewModel(await service.getLanguage(language))
  }
  useEffect(() => {
    if(props.screenType!==ScreenType.LOGIN_FORM && props.screenType!==ScreenType.CREATE_ACCOUNT_FORM)
      setMenuShow(true)
    else 
      setMenuShow(false)
  }, [props.screenType]);

    const leftMenu=()=>{
      return menuShow?
      <Menu 
        viewModel={viewModel}
        genaralMenuClickHandler={genaralMenuClickHandler} 
        securityMenuClickHandler={securityMenuClickHandler} 
        LogoutMenuClickHandler={LogoutMenuClickHandler}
      />:<div></div>
    }

    
  const loginClickHandler= async (username:string,password:string) =>{
    
    setLoginFormButtonLoading(true)
    const request={username, password} as LoginRequest
    
    const resp:LoginResponse= await service.attemptLogin(request) 
    setLoginMessage(EMPTY)
    //just for the api effect
    setTimeout(function() {
      if(resp.isSuccess){
        if (resp.language){
          setLanguage(resp.language)
          loadLanguage(resp.language) 
        }
        setUserName(username)
        setPrivacy(resp.privacy)
        props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
        inMemoryJWTManager.setToken(resp.jwtToken)

      }else {
        setLoginMessage(LOGIN_FAILED)
      }
      setLoginFormButtonLoading(false)
    }, millisecondsToWait);
  }
  const createAccountClickHandler =async(username:string,password:string)=>{
    const request={username, password} as CreateAccountRequest
    const resp:CreateAccountResponse= await service.createAccount(request) 
    if(resp.isSuccess){
      setCreateAccountMessage({
        message:resp.msg,
        isError:!resp.isSuccess
      }as MessageProperties)
      
      setTimeout(function() {
        props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
        inMemoryJWTManager.setToken(resp.jwtToken)
      }, millisecondsToWait);
    }else {
      setCreateAccountMessage({
        message:resp.msg,
        isError:!resp.isSuccess
      }as MessageProperties)
    }
  }
  
  const genaralMenuClickHandler=()=>{
    props.changeScreenType(ScreenType.CHANGE_LANGUAGE_FORM)
  }
  const securityMenuClickHandler=()=>{
    props.changeScreenType(ScreenType.SECURITY_MODIFICATION)
  
  }
  const LogoutMenuClickHandler=async()=>{
    props.changeScreenType(ScreenType.LOGIN_FORM)
    inMemoryJWTManager.ereaseToken()
    await service.logout() 
  }
  const displayCreateAccountHandler=()=>{
    props.changeScreenType(ScreenType.CREATE_ACCOUNT_FORM)
    
  }
  const onSaveClickHandler=async(language:Language,privacy:Privacy)=>{
    setViewModel (new Translation())
    const request={
      language,privacy,username
    } as LanguageChangeRequest
    const resp:LanguageChangeResponse= await service.languageChange(request) 
    if(resp.isSuccess){
      setLanguage(language)
      loadLanguage(language)
    }
    setChangeLanguageMessage({
      message:resp.msg,
      isError:!resp.isSuccess
    }as MessageProperties)
  }
  const changePasswordHandler =async(username:string,password:string)=>{
    const request={username, password} as ChangePasswordRequest
    const resp:ChangePasswordResponse= await service.changePassword(request) 

    setChangePasswordMessage({
      message:resp.msg,
      isError:!resp.isSuccess
    }as MessageProperties)
  }
  
  const deleteAccountHandler =async()=>{
    props.changeScreenType(ScreenType.LOGIN_FORM)
    inMemoryJWTManager.ereaseToken()
    await service.delete(username) 
  }
  
  
  const containerBody=()=>{
      return (
        <div className="container-body">
          {props.screenType===ScreenType.LOGIN_FORM && 
            <UserLoginForm viewModel={viewModel}
              loginClickHandler={loginClickHandler} 
              displayCreateAccountHandler={displayCreateAccountHandler}
              loading={loginFormButtonLoading}
              message={loginMessage}
            />
          }
          {props.screenType===ScreenType.CREATE_ACCOUNT_FORM && 
            <CreateAccountForm 
              viewModel={viewModel}
              createAccountClickHandler={createAccountClickHandler} 
              createAccountMessage={createAccountMessage}
            />}
          {props.screenType===ScreenType.CHANGE_LANGUAGE_FORM && 
            <ChangeLanguageForm 
              viewModel={viewModel}
              onSaveClickHandler={onSaveClickHandler}
              changeLanguageMessage={changeLanguageMessage}
              language={language}
              privacy={privacy}
            />
          }
          {props.screenType===ScreenType.SECURITY_MODIFICATION && 
            <SecurityModification  
              viewModel={viewModel}
              deleteAccountHandler={deleteAccountHandler} 
              changePasswordHandler={changePasswordHandler} 
              changePasswordMessage={changePasswordMessage}
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
    return {
      screenType: state.userStore.screenType
    };
  }

  export default connect((mapStateToProps),{
      changeScreenType,
  })(LandingPage);