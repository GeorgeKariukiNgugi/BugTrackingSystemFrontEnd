import axios from "axios";
import router from "../../../router";
const state = {
    registering: false,
    errors: null,
    registration_alert: false,
};
const mutations = {
    UPDATE_REGISTERING_STATE(state,payload) {
        state.registering = payload;
    },
    UPDATING_ERROR_STATE(state, payload){
        state.errors = payload
      },

    UNSET_THE_REGISTERING_STATE(state,payload){
        state.registering = payload
    },
    REGISTRATION_ALERT(state,payload){
            state.registration_alert = payload;            
    },
    UNSET_REGISTRATION_ALERT(state,payload){
        state.registration_alert = payload;
    }
};
const actions = {

    // ! this action is used to update the state of the the mapGetter. 

    unsettlingRegistrationState({commit}){

        commit("UNSET_THE_REGISTERING_STATE",false);

    },

    postRegisteringAUser({ commit },userDetails) {              
        axios
            .post("https://bugtrackingsystemapi.georgekprojects.tk/api/register",userDetails)
            .then(response => {                
                if (response.status === 200) {
                    commit("UPDATE_REGISTERING_STATE",true);
                    commit("REGISTRATION_ALERT",true);

                    // ! redirect user to logIn Page to LogIn.                                         
                    router.push('/login') 

                } else if(response.status === 206) {
                    commit("UPDATING_ERROR_STATE",response.data);
                    commit("UPDATE_REGISTERING_STATE",true);                    
                }
                
            })
            .catch(error => {                
                console.log("The call to register Users was unsuccessful", error);
            });
    },
    unsetRegistration({commit}){
        commit("UNSET_REGISTRATION_ALERT",false);
        console.log("Unsettling alert called");
    }
};
const getters = {
    registeringState: state=> state.registering,
    errorsState: state=> state.errors,
    registrationAlertState: state=> state.registration_alert,
};

const Registration = {
    state,
    mutations,
    actions,
    getters
}

export default Registration;