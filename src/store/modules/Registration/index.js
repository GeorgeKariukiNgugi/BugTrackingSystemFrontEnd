import axios from "axios";
const state = {
    registering: false,
    errors: null,
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
    }
};
const actions = {

    // ! this action is used to update the state of the the mapGetter. 

    unsettlingRegistrationState({commit}){

        commit("UNSET_THE_REGISTERING_STATE",false);

    },

    postRegisteringAUser({ commit },userDetails) {

        console.log("Called the Posting User Method.");        
        axios
            .post("https://bugtrackingsystemapi.georgekprojects.tk/api/register",userDetails)
            .then(response => {
                console.log("The call to register Users.");
                if (response.status === 200) {
                    commit("UPDATE_REGISTERING_STATE",true);
                    console.log(response);
                } else if(response.status === 206) {
                    commit("UPDATING_ERROR_STATE",response.data);
                    commit("UPDATE_REGISTERING_STATE",true);
                    console.log(response);
                }
                
            })
            .catch(error => {                
                console.log("The call to register Users was unsuccessful", error);
            });
    },
};
const getters = {
    registeringState: state=> state.registering,
    errorsState: state=> state.errors,
};

const Registration = {
    state,
    mutations,
    actions,
    getters
}

export default Registration;