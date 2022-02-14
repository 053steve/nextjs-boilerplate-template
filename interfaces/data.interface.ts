
export interface AppState {
    common: CommonState
    auth: AuthState
}

export interface AuthState {
    authUser?: any
    redirect?: string,
    token?: string | null,
}

export enum ALERT_TYPE {
    SUCCESS = 'SUCCESS',
    DANGER = 'DANGER'
}

export interface CommonState {
    loading: boolean
    alertMsg?: string,
    alertType?: ALERT_TYPE,
    showAlert: boolean,

}