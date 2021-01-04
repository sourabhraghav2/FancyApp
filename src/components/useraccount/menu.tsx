import {useState} from 'react'
import 'components/useraccount/style/menu.scss'
export enum Buttontype{
  GENERAL,
  SECURITY,
  LOGOUT,
}
const Menu=({genaralMenuClickHandler,securityMenuClickHandler,LogoutMenuClickHandler})=>{
  const [activeSelect,setActiveSelect] = useState(Buttontype.GENERAL);
  return (
      <div className="left-menu">
        
        <div className={"general-button menu-btn "+(activeSelect===Buttontype.GENERAL? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.GENERAL)
          genaralMenuClickHandler()
        }}>General</div>
        <div className={"security-button menu-btn "+(activeSelect===Buttontype.SECURITY? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.SECURITY)
          securityMenuClickHandler()
        }}>Security</div>
        <div className="empty menu-btn"></div>
        <div className={"logout menu-btn "+(activeSelect===Buttontype.LOGOUT? 'active-btn':'')} onClick={()=>{
          setActiveSelect(Buttontype.LOGOUT)
          LogoutMenuClickHandler()
        }}>Logout</div>
     </div>
    )
  }

  export default Menu