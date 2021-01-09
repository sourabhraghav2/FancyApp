import {useState} from 'react'
import 'components/useraccount/style/menu.scss'
import Translation from 'language/LanguageModel';
export enum Buttontype{
  GENERAL,
  SECURITY,
  LOGOUT,
}
interface Props {
  viewModel:Translation,
  genaralMenuClickHandler,
  securityMenuClickHandler,
  LogoutMenuClickHandler
}
const Menu=(props:Props)=>{
  const [activeSelect,setActiveSelect] = useState(Buttontype.GENERAL);
  return (
      <div className="left-menu">
        <div className={"general-button menu-btn "+(activeSelect===Buttontype.GENERAL? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.GENERAL)
          props.genaralMenuClickHandler()
        }}>{props.viewModel.GENERAL}</div>
        <div className={"security-button menu-btn "+(activeSelect===Buttontype.SECURITY? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.SECURITY)
          props.securityMenuClickHandler()
        }}>{props.viewModel.SECURITY}</div>
        <div className="empty "></div>
        <div className={"logout menu-btn "+(activeSelect===Buttontype.LOGOUT? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.LOGOUT)
          props.LogoutMenuClickHandler()
        }}>{props.viewModel.LOGOUT}</div>
     </div>
    )
  }

  export default Menu