import { ScreenType } from "common/constants"
import { Action } from "./types"

export const changeScreenType=(input:ScreenType)=>{
    console.log ('inside : changeScreenType')
    return {
        type:"CHANGE_SCREEN_TYPE",
        payLoad:input
    }   as Action
}

