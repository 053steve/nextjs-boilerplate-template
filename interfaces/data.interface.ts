
export interface AppState {
    common: CommonState
    auth: AuthState
}

export interface AuthState {
    authUser?: any
    redirect?: string,
    token?: string | null,
}

export interface CommonState {
    loading: boolean
    message?: string,
    showMessage: boolean
}