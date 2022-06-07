
import{createAction, props} from '@ngrx/store'
import { CommandeData } from "src/_models/commandeData"

export const setCommandeData = createAction('[select-clothes-form] setCommandeData ', props<{commandeData:CommandeData[]}>())