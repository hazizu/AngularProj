import { createReducer, on } from "@ngrx/store";
import { UserProfile } from "src/_models/userProfile";
import { setUserProfile } from "./searchUser.action";

export interface SearchUserState{
    userProfile: UserProfile | null;
}
export const initialState: SearchUserState = {userProfile:null};
export const _userProfileReducer = createReducer(
    initialState,
    on(setUserProfile,(state,data)=>({...state,userProfile:data.userProfile})),
)

export function userProfileReducer(state:any,action:any){
    return _userProfileReducer(state,action)
}