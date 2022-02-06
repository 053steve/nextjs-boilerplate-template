
export interface AppState {
    shared: SharedState
    auth: AuthState
}

export interface AuthState {
    authUser?: any
    redirect?: string,
    token?: string | null,
}

export interface SharedState {
    loading: boolean
    message?: string,
    showMessage: boolean
}