import { createContext, useContext, useState, useReducer } from 'react'

export interface IAuthState  {
    authenticated?: boolean;
    user?: object;
};


const initialState: IAuthState = {
    authenticated: false,
    user: undefined
}


function reducer(state, action) {
    return { ...state, ...action };
}


const AuthContext: any = createContext(undefined);

export function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('useAuth must be used inside a `AuthProvider`')

    return context
}