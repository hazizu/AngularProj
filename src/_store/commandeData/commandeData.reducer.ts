import { createReducer,on } from "@ngrx/store"
import { CommandeData } from "src/_models/commandeData"
import { setCommandeData } from "./commandeData.action"



export interface CommandeDataState{
    commandeData: CommandeData[] | any,
    
  }
  const initialState:CommandeDataState = {
    commandeData: [],
  }

  export const _commandeDatatReducer = createReducer(
      initialState,
      on(setCommandeData,(state, _commandeData) =>({...state, commandeData: _commandeData.commandeData}))
  )
  export function commandeDatatReducer(state:any, action:any){
      return _commandeDatatReducer(state, action)
  }