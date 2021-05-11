
import React, { useReducer } from "react";
import JobContext from "./JobContext";
import JobReducer from "./JobReducer";
import {
 SET_CURRENT_POST,GET_POST,ADD_POST
} from './action'
import axios from 'axios'

const JobState = (props) => {
    const initialState = {
        posts: [],
        current: null,
        
      };
      const [state, dispatch] = useReducer(JobReducer, initialState);
      const AddPost = async (post) => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          //await axios.post("http://localhost:5002/api/posts", post, config);
          dispatch({
            type: ADD_POST,
            payload: post,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const GetPost = async () => {
        const config = {
          headers: {
            "Conten-Type": "application/json",
          },
        };
        try {
          const res = await axios.get("http://localhost:5002/api/posts", config);
          dispatch({
            type: GET_POST,
            payload: res.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
      const setCurrent = (post) => {
        dispatch({ type: SET_CURRENT_POST, payload: post });
      };
    return (
        <JobContext.Provider
        value={{
          posts: state.posts,
          current: state.current,
          AddPost,
          GetPost,
          setCurrent
        }}
      >
        {props.children}
      </JobContext.Provider>
    )
}

export default JobState
