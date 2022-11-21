import { createReducer,on } from "@ngrx/store"
import {Provider} from "./../../_models/provider"
import { setProviderId, setProviderList } from "./providerList.action"



export interface ProviderListState{
    providerList: Provider[] | any,
    providerId:number
    
  }
  const initialState:ProviderListState = {
    providerList: [],
    providerId: 0
  }

  export const _providerListReducer = createReducer(
      initialState,
      on(setProviderList,(state, _providerList) =>({...state, providerList: _providerList.provider})),
      on(setProviderId,(state, _providerId) =>({...state, providerId: _providerId.providerId}))

  )
  export function providerListReducer(state:any, action:any){
      return _providerListReducer(state, action)
  }