import React , {useState} from 'react'
import 'components/useraccount/style/changeLanguageForm.scss';
const ChangeLanguageForm=({onSaveClickHandler})=>{
  const [language,setLanguage] = useState("English");
  const [privacy,setPrivacy] = useState("");
    return (
    <div className="change-language-form">
        <label className="language-label each-element">Language</label>
        <select className="input-language each-element" placeholder="English" onChange={(event)=>{event && setLanguage(event.target.value)}}>
          <option  className="each-language" >English</option>
          <option  className="each-language">French</option>
          <option  className="each-language">German</option>
          <option  className="each-language">Japanese</option>
          <option  className="each-language">Chinese</option>
          <option  className="each-language">Korean</option>
          <option  className="each-language">Thai</option>
        </select>
        <label className="privacy-label each-element">Privacy</label>
        <div className="privacy-type" >
          <input onChange={(event)=>{setPrivacy(event.target.value)}} className="each-type" type="radio" value="Public" name="privacy" /> Public
          <input onChange={(event)=>{setPrivacy(event.target.value)}} className="each-type" type="radio" value="Private" name="privacy" /> Private
        </div>
        <button className="save-btn btn active-btn each-element" onClick={()=>{onSaveClickHandler(language,privacy)}}>
          Save changes
        </button>
        
    </div>
    )
  }
  export default ChangeLanguageForm