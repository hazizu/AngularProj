import{Provider} from "./../../_models/provider"
import{createAction, props} from '@ngrx/store'

export const setProviderList = createAction('[service-provider] setProviderList', props<{provider:Provider[]}>())