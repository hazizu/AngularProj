import { commandeDatatReducer } from "src/_store/commandeData/commandeData.reducer";
import { providerListReducer } from "src/_store/providersList/providerList.reducer";
import { userProfileReducer } from "src/_store/searchUser/searchUser.reducer";

export const reducers={
    providerList:providerListReducer,
    commandeData:commandeDatatReducer,
    userProfile: userProfileReducer

}