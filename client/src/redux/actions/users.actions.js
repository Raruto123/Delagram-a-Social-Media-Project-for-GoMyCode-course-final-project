import axios from "axios";

export const GET_USERS = "GET_USERS";

export const GetUsers = () => {
    return(dispatch) => {
        return axios.get("http://localhost:3000/api/user").then((res) => {
            dispatch({type : GET_USERS, payload : res.data});
        }).catch((err) => {
            console.log((err));
        })
    }
}