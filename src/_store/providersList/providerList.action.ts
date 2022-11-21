import{Provider} from "./../../_models/provider"
import{createAction, props} from '@ngrx/store'

export const setProviderList = createAction('[service-provider] setProviderList', props<{provider:Provider[]}>())
export const setProviderId = createAction('[service-provider] setProviderId', props<{providerId:number}>())