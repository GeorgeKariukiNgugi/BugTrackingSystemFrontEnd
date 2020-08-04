import axios from "axios";
import router from "../../../router";
const state = {
        unSuccessfulLogIn : false,
        postingProgress: true,
};
const mutations ={

    UNSUCCESSFUL_LOG_IN(state,payload){
            state.unSuccessfulLogIn = payload;            
    },
    UNSET_THE_LOGIN_STATUS(state,payload){
        state.successfulLogIn = payload;
    },
    PROGRESS_TO_POSTING(state,payload){
        state.postingProgress = payload;
    },
    UNSET_PROGRESS_TO_POSTING(state,payload){
        state.postingProgress = payload;
    }

};
const actions ={

    //! method to post the LogIn data. 

    postingLogInData({commit},logInData){
        axios.post("https://bugtrackingsystemapi.georgekprojects.tk/api/login",logInData).then(
            response => {                 
                //! getting the status of the request that is sent. 
                console.log(response);
                if (response.status === 200) {  
                    commit("PROGRESS_TO_POSTING",false);                  
                    // ! if the request is successful.                    
                    // ! redirect to the appropriate page based on the roles and permissions in the application. 
                    
                    var role = response.data.role

                    switch (role[0]) {
                        case 'user':
                            router.push('/firstLineSupport') 
                            break;
                            case 'firstLineSupport':                                
                            router.push('/firstLineSupport') 
                            break;
                            
                    
                        default:
                            break;
                    }
                                      

                } else if(response.status === 206){
                    // ! if the request is unsuccessful.                    
                    commit("UNSUCCESSFUL_LOG_IN",true);
                    commit("PROGRESS_TO_POSTING",false);
                }
            }
        ).catch( error =>{
            console.log("This is the error in the request.");
            console.log(error);
        });
    },

    // ! method to unset the checker for the logIn Status. 

    unsetLogInStatus({commit}){
        commit("UNSUCCESSFUL_LOG_IN",false);
    },

    // ! method to unset the progress state
    unset_progress_state({commit}){
        commit("UNSET_PROGRESS_TO_POSTING",true);
    }
}
const getters = {
        logInStatus: state => state.unSuccessfulLogIn,
        postingProgressState: state => state.postingProgress,
}

const LogIn ={
    state,mutations,actions,getters
}
export default LogIn
