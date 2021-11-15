import axios from 'axios';
import { toast } from "react-toastify";
import authHeader from "../services/authHeader";
import BASE_URL from '../utils/baseUrl'



export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";


export const getUsers = () => ({
    type: GET_USERS,
})

export const getUserSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users
})

export const getUsersFailure = () => ({
    type: GET_USERS_FAILURE,
})

export function fetchAllUsers() {
    return async (dispatch, getState) => {
        dispatch(getUsers())

        try {
            const url = `/users`;
            let usersFromBackend = await axios.get(`${BASE_URL}${url}`)
            usersFromBackend = usersFromBackend.data;
            dispatch(getUserSuccess(usersFromBackend))
        } catch (error) {
            dispatch(getUsersFailure())
        }
    }
}