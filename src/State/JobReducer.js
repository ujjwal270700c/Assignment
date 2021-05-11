import {
    ADD_POST,
  
    SET_CURRENT_POST,
  
    GET_POST,
   
  } from "./action";

  const array=[];
  export default (state, action) => {
    switch (action.type) {
      case ADD_POST:
          array.push(action.payload)
        return {
          ...state,
          posts: array,
          loading: false,
        };
        case GET_POST:
            {
            return{
                ...state,
                posts:action.payload,
                loading:false
            }
        }
       
        case SET_CURRENT_POST:
            return{
                ...state,
                current:action.payload
            }   
      
      
      default:
        return state;
    }
  };