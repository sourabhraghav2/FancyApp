import React , {useState,useEffect} from 'react'
import 'components/useraccount/style/changeLanguageForm.scss';
import Translation from 'language/LanguageModel';
import {Language, Privacy} from 'common/constants';
import { MessageProperties } from './landingPage';
interface Props {
  viewModel:Translation,
  onSaveClickHandler,
  changeLanguageMessage:MessageProperties
  language:string,
  privacy:string
}

const ChangeLanguageForm=(props:Props)=>{
  const [language,setLanguage] = useState(props.language);
  const [privacy,setPrivacy] = useState(props.privacy);
  const [displayMessage,setDisplayMessage] = useState({}as MessageProperties);
  
  useEffect (()=>{
    setDisplayMessage(props.changeLanguageMessage)
  },[props.changeLanguageMessage])

    return (
    <div className="change-language-form">
        <label className="language-label each-element">{props.viewModel.LANGUAGE}</label>
        <select className="input-language each-element" placeholder="English" onChange={(event)=>{event && setLanguage(event.target.value)}}>
          <option  className="each-language" >{Language.ENGLISH}</option>
          <option  className="each-language">{Language.CHINESE}</option>
          <option  className="each-language">{Language.FRENCH}</option>
          <option  className="each-language">{Language.GERMAN}</option>
          <option  className="each-language">{Language.JAPNESE}</option>
          <option  className="each-language">{Language.KOREAN}</option>
          <option  className="each-language">{Language.THAI}</option>
        </select>
        <label className="privacy-label each-element">{props.viewModel.PRIVACY}</label>
        <div className="privacy-type" >
          <input onChange={(event)=>{setPrivacy(event.target.value)}} checked={privacy===Privacy.PUBLIC} className="each-type" type="radio" value={Privacy.PUBLIC} name="privacy" /> {props.viewModel.PUBLIC}
          <input onChange={(event)=>{setPrivacy(event.target.value)}} checked={privacy===Privacy.PRIVATE} className="each-type" type="radio" value={Privacy.PRIVATE} name="privacy" /> {props.viewModel.PRIVATE}
        </div>
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
        <button className="save-btn btn active-btn each-element" onClick={()=>{props.onSaveClickHandler(language,privacy)}}>
          {props.viewModel.SAVE_CHANGES}
        </button>
        
    </div>
    )
  }
  export default ChangeLanguageForm