import { createReducer,on } from "@ngrx/store"
import {Provider} from "./../../_models/provider"
import { setProviderList } from "./providerList.action"



export interface ProviderListState{
    providerList: Provider[] | any,
    
  }
  const initialState:ProviderListState = {
    providerList: [],
  }

  export const _providerListReducer = createReducer(
      initialState,
      on(setProviderList,(state, _providerList) =>({...state, providerList: _providerList.provider}))
  )
  export function providerListReducer(state:any, action:any){
      return _providerListReducer(state, action)
  }