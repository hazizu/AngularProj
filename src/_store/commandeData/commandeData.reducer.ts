import { createReducer,on } from "@ngrx/store"
import { CommandeData } from "src/_models/commandeData"
import { setCommandeData,setProfilState} from "./commandeData.action"




export interface CommandeDataState{
    commandeData: CommandeData[] | any,
     open: boolean,
    
  }
  const initialState:CommandeDataState = {
    commandeData: [],
     open: false
  }

  export const _commandeDatatReducer = createReducer(
      initialState,
      on(setCommandeData,(state, _commandeData) =>({...state, commandeData: _commandeData.commandeData})),
       on(setProfilState, (state, _open) =>({...state, open: _open.openProfile}))

  )
  export function commandeDatatReducer(state:any, action:any){
      return _commandeDatatReducer(state, action)
  }