export const getProfile = (state) =>{
   return state.profilePage.profile;
}

export const getStatus = (state) =>{
   return state.profilePage.status;
}

export const getGrandUserId = (state) =>{
   return state.auth.id;
}

export const getOnLog = (state) =>{
   return state.profilePage.onLog;
}

export const getErrorMessage = (state) =>{
   return state.profilePage.errorMessage;
}