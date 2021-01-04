
import { ScreenType } from 'common/constants'
import {Action} from 'modules/types' 
import {combineReducers} from 'redux'
import {createStore} from 'redux' 
const initState={
    screenType:ScreenType.LOGIN_FORM
}

const  userStore=(state = initState, action:Action)=>{ 
   
    switch (action.type) {
        case 'CHANGE_SCREEN_TYPE':
            return {
                screenType:action.payLoad
            }
        default:
            return initState
    }
}

export const store = createStore(
    combineReducers({userStore:userStore})
)

