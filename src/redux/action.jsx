import axios from 'axios'
import * as type from './typeAction'



export function fetchPatient(){
    return function (dispatch,getState){
        console.log(getState)
        dispatch({type:type.FETCH_PATIENT_REQUEST})
        fetch("http://localhost:3500/patient")
        .then(res=>res.json())
        .then(data=>dispatch({type:type.FETCH_PATIENT_SUCCESS,payload:data}))
        .catch(err=>dispatch({type:type.FETCH_PATIENT_FAILURE,payload:err.message}))

    }
}



export function postPatient(patient) {
    return function(dispatch, getState) {
      
      dispatch({ type: "POST_PATIENT_REQUEST" });
  
      let p = axios.post('http://localhost:3500/patient', patient);
      p.then((response) => {
        dispatch({type: type.POST_PATIENT_SUCCESS,payload: response.data})})
      .catch((error) => {dispatch({type: "POST_PATIENT_FAILURE",payload: error.message })});
      return p;
    };
  }

  

  




        
      
            
           


        
 


