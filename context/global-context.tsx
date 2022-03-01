import { createContext, useContext, useState, useReducer } from 'react'
import { ALERT_TYPE } from '../interfaces/data.interface';

export interface IGlobalState {
    alertMsg: string,
    loading: boolean,
    showAlert: boolean,
    alertType?: ALERT_TYPE | undefined
}

const initialState: IGlobalState = {
    alertMsg: '',
    loading: false,
    showAlert: false,
    alertType: undefined
}

function reducer(state, action) {
    return { ...state, ...action };
}


const GlobalContext: any = createContext(undefined);


export function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobal() {
    const context = useContext(GlobalContext);

    if (!context)
        throw new Error('useGlobal must be used inside a `GlobalProvider`')

    return context
}

