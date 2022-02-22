/**
 * Generated by orval v6.6.3 🍺
 * Do not edit manually.
 * angular-typescript-starter
 * BE
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import useSwr,{
  SWRConfiguration,
  Key
} from 'swr'
import type {
  AuthResponses,
  AuthRequest,
  UserResponse,
  SearchUserParams,
  UserCreateReq,
  NonceReq,
  GetAllUsersParams,
  UserUpdateReq,
  GetUserByUserTypeParams,
  UserType
} from './model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


export const auth = (
    authRequest: AuthRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<AuthResponses>> => {
    return axios.post(
      `/auth`,
      authRequest,options
    );
  }



export const searchUser = (
    params?: SearchUserParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.get(
      `/user/search`,{
        params,
    ...options}
    );
  }


export const getSearchUserKey = (params?: SearchUserParams,) => [`/user/search`, ...(params ? [params]: [])];

    
export const useSearchUser = <TError = AxiosError<unknown>>(
 params?: SearchUserParams, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof searchUser>, TError> & {swrKey: Key}, axios?: AxiosRequestConfig }

  ) => {

  const {swr: swrOptions, axios: axiosOptions} = options || {}

  const swrKey = swrOptions?.swrKey ?? (() => getSearchUserKey(params))
  const swrFn = () => searchUser(params, axiosOptions);

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


export const createUser = (
    userCreateReq: UserCreateReq, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.post(
      `/user/create`,
      userCreateReq,options
    );
  }



export const getOrCreateNonce = (
    nonceReq: NonceReq, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.post(
      `/user/create/nonce`,
      nonceReq,options
    );
  }



export const getAllUsers = (
    params?: GetAllUsersParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.get(
      `/user/list`,{
        params,
    ...options}
    );
  }


export const getGetAllUsersKey = (params?: GetAllUsersParams,) => [`/user/list`, ...(params ? [params]: [])];

    
export const useGetAllUsers = <TError = AxiosError<unknown>>(
 params?: GetAllUsersParams, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof getAllUsers>, TError> & {swrKey: Key}, axios?: AxiosRequestConfig }

  ) => {

  const {swr: swrOptions, axios: axiosOptions} = options || {}

  const swrKey = swrOptions?.swrKey ?? (() => getGetAllUsersKey(params))
  const swrFn = () => getAllUsers(params, axiosOptions);

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


export const getUser = (
    userId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.get(
      `/user/detail/${userId}`,options
    );
  }


export const getGetUserKey = (userId: string,) => [`/user/detail/${userId}`];

    
export const useGetUser = <TError = AxiosError<unknown>>(
 userId: string, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof getUser>, TError> & {swrKey: Key}, axios?: AxiosRequestConfig }

  ) => {

  const {swr: swrOptions, axios: axiosOptions} = options || {}

  const isEnable = !!(userId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getGetUserKey(userId) : null);
  const swrFn = () => getUser(userId, axiosOptions);

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


export const updateUser = (
    userId: string,
    userUpdateReq: UserUpdateReq, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.put(
      `/user/update/${userId}`,
      userUpdateReq,options
    );
  }



export const deleteUser = (
    userId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.delete(
      `/user/delete/${userId}`,options
    );
  }



export const getUserByUserType = (
    usertype: UserType,
    params?: GetUserByUserTypeParams, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UserResponse>> => {
    return axios.get(
      `/user/${usertype}`,{
        params,
    ...options}
    );
  }


export const getGetUserByUserTypeKey = (usertype: UserType,
    params?: GetUserByUserTypeParams,) => [`/user/${usertype}`, ...(params ? [params]: [])];

    
export const useGetUserByUserType = <TError = AxiosError<unknown>>(
 usertype: UserType,
    params?: GetUserByUserTypeParams, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof getUserByUserType>, TError> & {swrKey: Key}, axios?: AxiosRequestConfig }

  ) => {

  const {swr: swrOptions, axios: axiosOptions} = options || {}

  const isEnable = !!(usertype)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getGetUserByUserTypeKey(usertype,params) : null);
  const swrFn = () => getUserByUserType(usertype,params, axiosOptions);

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


