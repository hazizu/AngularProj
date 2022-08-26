import { createAction, props } from "@ngrx/store";
import { UserProfile } from "src/_models/userProfile";

export const setUserProfile = createAction('[Login Component], setUserProfile',props<{userProfile:UserProfile}>())
