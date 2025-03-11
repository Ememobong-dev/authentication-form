
import { createContext, useReducer } from 'react'
import API from '../api/axios';

const AuthContext = createContext(null);

interface UserInterface{

        id: number,
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        gender: string,
        image: string,
        accessToken: string,
        refreshToken: string 
}

interface StateType  {
    user: UserInterface,
    token: string ,
    error: string
}

const INITIAL_STATE: StateType | null = null


const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_SUCCESSFUL":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                error: null
            };
        case "LOGOUT":
            return {
                user: null,
                token: null,
                error: null
            };
        case "LOGIN_UNSUCCESSFUL":
            return {
                ...state,
                user: null,
                token: null,
                error: action.payload.error
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: null
            }
        default: {
            return state;
        }
    }
}


const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const login =  async(username:string, password: string) => {
        try{
            const response = await API.post("auth/login", {username, password});
            dispatch({
                type: "LOGIN_SUCCESSFUL",
                payload: {
                    user: response.data,
                    token: response.data.accessToken
                }
            });
            localStorage.setItem("token", JSON.stringify(response.data.accessToken) );
        }catch(err){
            console.log(err)
            dispatch({
                type: "LOGIN_UNSUCCESSFUL",
                payload:{
                    error: err.response?.data?.message || "Incorrect Login Details"
                }
            })
        }
    }

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        });
        localStorage.removeItem("token")

    }


    return(
        <AuthContext.Provider value={{ ...state, login, logout, dispatch }} >
            {
                children
            }

        </AuthContext.Provider>
    )

}




export {AuthContext, AuthProvider}